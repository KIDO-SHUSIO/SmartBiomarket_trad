/**
 * biotrade Mock Database & Transaction Ledger System (db.js)
 * High-fidelity localStorage-backed data store with relational entities:
 * 1. User Profiles (Shop/Farm Name, Phone, Address, Role, PDPA Consent)
 * 2. Listing Management (Type, Weight, Price, Photos, Status)
 * 3. Transaction & Ledger (Orders, Gross Revenue, 10% Platform GP fee, Net Payout)
 * 4. ESG Impact Aggregations
 */

const biotradeDB = (function() {
  const STORAGE_KEYS = {
    USER: 'biotrade_current_user',
    LISTINGS: 'biotrade_listings',
    ORDERS: 'biotrade_orders',
    CONSENT: 'biotrade_pdpa_consent'
  };

  // ── Default Seed Data ──────────────────────────────────────
  const DEFAULT_USER = {
    id: "USR-TH-7489",
    shopName: "GreenHarvest Bio-Farms & Agro Ltd.",
    contactPerson: "Somchai Prasert",
    phone: "+66 81 234 5678",
    email: "somchai@greenharvest.co.th",
    address: "42/8 Moo 5, Malaiman Road, Kamphaeng Saen, Nakhon Pathom 73140, Thailand",
    role: "seller", // 'seller' | 'buyer' | 'both'
    taxId: "0105562098711",
    verified: true,
    rating: 4.9,
    memberSince: "January 2026",
    pdpaConsent: true,
    pdpaConsentDate: "2026-10-15T09:30:00Z",
    tosConsent: true,
    tosConsentDate: "2026-10-15T09:30:00Z"
  };

  const DEFAULT_LISTINGS = [
    {
      id: "LST-801",
      category: "raw",
      typeKey: "spent_grain",
      title: "Brewery Spent Malt Grain (High Protein)",
      weight: 12,
      weightUnit: "tons",
      price: 450, // ฿450 / ton
      location: "Nakhon Pathom Industrial Park",
      photoUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
      status: "available", // 'available' | 'sold' | 'reserved'
      sellerId: "USR-TH-7489",
      sellerName: "GreenHarvest Bio-Farms & Agro Ltd.",
      moistureLevel: "High (> 50%)",
      noPlasticsVerified: true,
      createdAt: "2026-10-24T08:00:00Z"
    },
    {
      id: "LST-802",
      category: "raw",
      typeKey: "coffee",
      title: "Clean Arabica Spent Coffee Grounds",
      weight: 3.5,
      weightUnit: "tons",
      price: 600, // ฿600 / ton
      location: "Mueang Nakhon Pathom",
      photoUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
      status: "available",
      sellerId: "USR-TH-7489",
      sellerName: "GreenHarvest Bio-Farms & Agro Ltd.",
      moistureLevel: "Medium (15-50%)",
      noPlasticsVerified: true,
      createdAt: "2026-10-26T11:20:00Z"
    },
    {
      id: "LST-803",
      category: "raw",
      typeKey: "soy",
      title: "Fresh Tofu Okara Residue (Soybean Pulp)",
      weight: 8,
      weightUnit: "tons",
      price: 380, // ฿380 / ton
      location: "Sam Phran, Nakhon Pathom",
      photoUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
      status: "sold",
      sellerId: "USR-TH-7489",
      sellerName: "GreenHarvest Bio-Farms & Agro Ltd.",
      moistureLevel: "High (> 50%)",
      noPlasticsVerified: true,
      createdAt: "2026-10-21T14:10:00Z"
    },
    {
      id: "LST-804",
      category: "raw",
      typeKey: "fruit",
      title: "Fresh Citrus & Pineapple Peels",
      weight: 5,
      weightUnit: "tons",
      price: 0, // Free pickup
      location: "Don Tum, Nakhon Pathom",
      photoUrl: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=600&q=80",
      status: "available",
      sellerId: "USR-TH-7489",
      sellerName: "GreenHarvest Bio-Farms & Agro Ltd.",
      moistureLevel: "High (> 50%)",
      noPlasticsVerified: true,
      createdAt: "2026-10-27T09:45:00Z"
    },
    {
      id: "LST-805",
      category: "eats",
      typeKey: "surplus_meal",
      title: "Artisan Bakery & Croissant Surprise Bag",
      weight: 1,
      weightUnit: "bag",
      price: 89, // ฿89 (Value ฿260)
      location: "Nakhon Pathom University Area",
      photoUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      status: "available",
      sellerId: "USR-TH-7489",
      sellerName: "GreenHarvest Bio-Farms & Agro Ltd.",
      moistureLevel: "Low (< 15%)",
      noPlasticsVerified: true,
      createdAt: "2026-10-29T16:00:00Z"
    }
  ];

  const DEFAULT_ORDERS = [
    {
      id: "ORD-9011",
      listingId: "LST-803",
      itemTitle: "Fresh Tofu Okara Residue (Soybean Pulp)",
      category: "raw",
      typeKey: "soy",
      weight: "8.0 Tons",
      weightKg: 8000,
      buyerName: "Siam Bio-Feed Industrial Ltd.",
      sellerName: "GreenHarvest Bio-Farms & Agro Ltd.",
      grossAmount: 3040.00, // 8 tons * ฿380
      platformFeeRate: 0.10, // 10% Platform GP (Commission)
      platformFee: 304.00,  // Deducted 10%
      netPayout: 2736.00,    // Seller receives 90%
      co2SavedKg: 6240,     // 8,000 kg * 0.78
      status: "completed",
      date: "2026-10-22",
      invoiceNumber: "INV-2026-0914"
    },
    {
      id: "ORD-9012",
      listingId: "LST-798",
      itemTitle: "Distillery Spent Grain & Yeast Slurry",
      category: "raw",
      typeKey: "spent_grain",
      weight: "15.0 Tons",
      weightKg: 15000,
      buyerName: "AgriPower Composting Plant",
      sellerName: "GreenHarvest Bio-Farms & Agro Ltd.",
      grossAmount: 7500.00, // 15 tons * ฿500
      platformFeeRate: 0.10,
      platformFee: 750.00,
      netPayout: 6750.00,
      co2SavedKg: 7800,     // 15,000 kg * 0.52
      status: "completed",
      date: "2026-10-18",
      invoiceNumber: "INV-2026-0887"
    },
    {
      id: "ORD-9013",
      listingId: "LST-792",
      itemTitle: "Clean Arabica Spent Coffee Grounds (Bulk)",
      category: "raw",
      typeKey: "coffee",
      weight: "4.0 Tons",
      weightKg: 4000,
      buyerName: "BioPlastics Tech Co., Ltd.",
      sellerName: "GreenHarvest Bio-Farms & Agro Ltd.",
      grossAmount: 2400.00, // 4 tons * ฿600
      platformFeeRate: 0.10,
      platformFee: 240.00,
      netPayout: 2160.00,
      co2SavedKg: 2600,     // 4,000 kg * 0.65
      status: "completed",
      date: "2026-10-14",
      invoiceNumber: "INV-2026-0842"
    },
    {
      id: "ORD-9014",
      listingId: "LST-805",
      itemTitle: "Artisan Bakery & Croissant Surprise Bag",
      category: "eats",
      typeKey: "surplus_meal",
      weight: "3 Bags",
      weightKg: 2.4,
      buyerName: "K. Tanawat Ch.",
      sellerName: "GreenHarvest Bio-Farms & Agro Ltd.",
      grossAmount: 267.00,  // 3 * ฿89
      platformFeeRate: 0.10,
      platformFee: 26.70,
      netPayout: 240.30,
      co2SavedKg: 7.5,      // 3 * 2.5 kg
      status: "completed",
      date: "2026-10-29",
      invoiceNumber: "EAT-2026-3199"
    }
  ];

  // ── Initialization ──────────────────────────────────────────
  function init() {
    if (typeof localStorage === 'undefined') return;
    if (!localStorage.getItem(STORAGE_KEYS.USER)) {
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(DEFAULT_USER));
    }
    if (!localStorage.getItem(STORAGE_KEYS.LISTINGS)) {
      localStorage.setItem(STORAGE_KEYS.LISTINGS, JSON.stringify(DEFAULT_LISTINGS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.ORDERS)) {
      localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(DEFAULT_ORDERS));
    }
  }

  // ── User Profile Methods ─────────────────────────────────────
  function getUser() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.USER);
      return data ? JSON.parse(data) : DEFAULT_USER;
    } catch (e) {
      return DEFAULT_USER;
    }
  }

  function updateUser(updates) {
    const current = getUser();
    const updated = { ...current, ...updates, updatedAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('biotrade_user_updated', { detail: updated }));
    return updated;
  }

  // ── Listing Methods ──────────────────────────────────────────
  function getListings() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.LISTINGS);
      return data ? JSON.parse(data) : DEFAULT_LISTINGS;
    } catch (e) {
      return DEFAULT_LISTINGS;
    }
  }

  function addListing(listingData) {
    const listings = getListings();
    const newId = "LST-" + Math.floor(100 + Math.random() * 900);
    const user = getUser();

    const newListing = {
      id: newId,
      category: listingData.category || "raw",
      typeKey: listingData.typeKey || "other",
      title: listingData.title || "Organic Waste Stream",
      weight: parseFloat(listingData.weight) || 1,
      weightUnit: listingData.weightUnit || "tons",
      price: parseFloat(listingData.price) || 0,
      location: listingData.location || user.address || "Nakhon Pathom",
      photoUrl: listingData.photoUrl || "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
      status: "available",
      sellerId: user.id,
      sellerName: user.shopName,
      moistureLevel: listingData.moistureLevel || "Medium (15-50%)",
      noPlasticsVerified: !!listingData.noPlasticsVerified,
      createdAt: new Date().toISOString()
    };

    listings.unshift(newListing);
    localStorage.setItem(STORAGE_KEYS.LISTINGS, JSON.stringify(listings));
    window.dispatchEvent(new CustomEvent('biotrade_listings_updated', { detail: listings }));
    return newListing;
  }

  function updateListingStatus(listingId, newStatus) {
    const listings = getListings();
    const index = listings.findIndex(item => item.id === listingId);
    if (index !== -1) {
      listings[index].status = newStatus;
      localStorage.setItem(STORAGE_KEYS.LISTINGS, JSON.stringify(listings));
      window.dispatchEvent(new CustomEvent('biotrade_listings_updated', { detail: listings }));
      return listings[index];
    }
    return null;
  }

  function deleteListing(listingId) {
    let listings = getListings();
    listings = listings.filter(item => item.id !== listingId);
    localStorage.setItem(STORAGE_KEYS.LISTINGS, JSON.stringify(listings));
    window.dispatchEvent(new CustomEvent('biotrade_listings_updated', { detail: listings }));
    return listings;
  }

  // ── Orders & Transaction Ledger Methods ───────────────────────
  function getOrders() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ORDERS);
      return data ? JSON.parse(data) : DEFAULT_ORDERS;
    } catch (e) {
      return DEFAULT_ORDERS;
    }
  }

  /**
   * Create order with automatic 10% Platform GP deduction calculation
   */
  function createOrder(orderPayload) {
    const orders = getOrders();
    const orderNum = "ORD-" + Math.floor(9000 + Math.random() * 1000);
    const gross = parseFloat(orderPayload.grossAmount) || 0;
    const rate = 0.10; // 10% platform commission
    const platformFee = Math.round(gross * rate * 100) / 100;
    const netPayout = Math.round((gross - platformFee) * 100) / 100;

    // Calculate CO2e savings through CarbonEngine
    let co2SavedKg = 0;
    if (typeof CarbonEngine !== 'undefined') {
      const calc = CarbonEngine.calculateCo2e(
        orderPayload.typeKey || 'other',
        orderPayload.weightVal || 1,
        orderPayload.weightUnit || 'tons'
      );
      co2SavedKg = calc.co2SavedKg;
    }

    const newOrder = {
      id: orderNum,
      listingId: orderPayload.listingId || null,
      itemTitle: orderPayload.itemTitle || "Organic Trade Item",
      category: orderPayload.category || "raw",
      typeKey: orderPayload.typeKey || "other",
      weight: orderPayload.weightDisplay || "1 Ton",
      weightKg: orderPayload.weightKg || 1000,
      buyerName: orderPayload.buyerName || "Verified Bio-Economy Off-Taker",
      sellerName: orderPayload.sellerName || getUser().shopName,
      grossAmount: gross,
      platformFeeRate: rate,
      platformFee: platformFee,
      netPayout: netPayout,
      co2SavedKg: co2SavedKg,
      status: "completed",
      date: new Date().toISOString().split('T')[0],
      invoiceNumber: "INV-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000)
    };

    orders.unshift(newOrder);
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));

    // Update listing status to sold if applicable
    if (orderPayload.listingId) {
      updateListingStatus(orderPayload.listingId, 'sold');
    }

    window.dispatchEvent(new CustomEvent('biotrade_orders_updated', { detail: orders }));
    return newOrder;
  }

  // ── ESG Aggregations ──────────────────────────────────────────
  function getEsgSummary() {
    const orders = getOrders();
    let totalCo2SavedKg = 0;
    let totalWeightKg = 0;

    orders.forEach(ord => {
      totalCo2SavedKg += (parseFloat(ord.co2SavedKg) || 0);
      totalWeightKg += (parseFloat(ord.weightKg) || 0);
    });

    const totalCo2eTons = Math.round((totalCo2SavedKg / 1000) * 100) / 100;
    const totalWasteDivertedTons = Math.round((totalWeightKg / 1000) * 100) / 100;

    const equivalencies = (typeof CarbonEngine !== 'undefined')
      ? CarbonEngine.calculateEquivalencies(totalCo2SavedKg, totalWasteDivertedTons)
      : {
          treesPlantedYear: Math.round(totalCo2SavedKg / 21.77),
          passengerCarKm: Math.round(totalCo2SavedKg / 0.17),
          landfillVolumeM3: Math.round(totalWasteDivertedTons * 1.4)
        };

    return {
      totalCo2SavedKg,
      totalCo2eTons,
      totalWasteDivertedTons,
      treesEquivalent: equivalencies.treesPlantedYear,
      carKmOffset: equivalencies.passengerCarKm,
      landfillVolumeM3: equivalencies.landfillVolumeM3,
      totalTransactions: orders.length
    };
  }

  // Self initialize on load
  init();

  return {
    getUser,
    updateUser,
    getListings,
    addListing,
    updateListingStatus,
    deleteListing,
    getOrders,
    createOrder,
    getEsgSummary,
    init
  };
})();

if (typeof window !== 'undefined') {
  window.biotradeDB = biotradeDB;
}
