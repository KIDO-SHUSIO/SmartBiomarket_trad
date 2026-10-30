/**
 * biotrade i18n Translation Engine
 * Complete English (en) and Thai (th) localization dictionary
 * Supports static UI elements, legal/PDPA agreements, ESG Carbon engine,
 * database tables, financial ledger, and dynamic category translations.
 */

const translations = {
  en: {
    // ── Universal Navbar ──
    "nav.gateway": "Home",
    "nav.eats": "biotrade eats",
    "nav.raw": "biotrade raw",
    "nav.postWaste": "Post Waste",
    "nav.dashboard": "Dashboard & ESG",
    "nav.enterRaw": "Marketplace",
    "nav.eatsB2c": "Eats",
    "nav.newListing": "+ New Listing",
    "nav.esgReport": "ESG Report",
    "nav.myListings": "My Listings",
    "nav.backMarket": "Back to Marketplace",

    // ── Gateway Landing Page (index.html) ──
    "gateway.badge": "Launching the circular economy",
    "gateway.heroTitle": "Save Food.<br />Trade Waste.<br /><span class=\"shimmer-text\">Zero Landfill.</span>",
    "gateway.heroDesc": "The dual-gateway platform connecting consumers to surplus meals and industries to valorized organic waste streams.",
    "gateway.scrollHint": "Select a gateway to begin",
    "gateway.eatsBadge": "B2C Food Rescue",
    "gateway.eatsDesc": "Rescue delicious surplus meals, baked goods, and fresh produce from local restaurants, cafes, and supermarkets at 50–70% off. Every bag saves CO2.",
    "gateway.eatsTag1": "Save up to 70%",
    "gateway.eatsTag2": "Surprise Bags",
    "gateway.eatsTag3": "Zero Waste",
    "gateway.eatsBtn": "Explore Eats",
    "gateway.rawBadge": "B2B Waste-to-Value",
    "gateway.rawDesc": "Connect food processors, breweries, and agriculture with verified off-takers. Trade coffee grounds, spent grain, peels, and biomass at commercial scale.",
    "gateway.rawTag1": "Industrial Scale",
    "gateway.rawTag2": "Verified Off-Takers",
    "gateway.rawTag3": "Traceable ESG",
    "gateway.rawBtn": "Enter Raw Market",
    "gateway.statMeals": "Meals Rescued",
    "gateway.statPartners": "Partner Businesses",
    "gateway.statWaste": "Waste Diverted",
    "gateway.footerCopy": "&copy; 2026 biotrade · Building the circular economy",

    // ── Eats Dashboard (eats.html) ──
    "eats.heroTitle": "Grab a Surprise Bag before it's gone!",
    "eats.heroDesc": "Delicious surplus food from top restaurants, bakeries & supermarkets in Nakhon Pathom at up to 70% off.",
    "eats.searchPlaceholder": "Search restaurants, bakeries…",
    "eats.filterAll": "All",
    "eats.filterBakery": "Bakery",
    "eats.filterMeals": "Meals",
    "eats.filterSupermarket": "Supermarket",
    "eats.filterVegetarian": "Vegetarian",
    "eats.availTitle": "Available Surprise Bags Near You",
    "eats.availSubtitle": "Pick up fresh surplus meals and rescue delicious food today",
    "eats.badgeLeft": "left",
    "eats.reserveBtn": "Reserve Now",
    "eats.reservedBtn": "Reserved!",
    "eats.bottomHome": "Home",
    "eats.bottomMap": "Map View",
    "eats.bottomOrders": "Orders",
    "eats.bottomProfile": "Profile",
    "eats.mapTitle": "Surprise Bags Map View",
    "eats.mapSubtitle": "6 active food rescue spots in Nakhon Pathom",
    "eats.mapClose": "Close Map",

    // ── Raw Marketplace (raw.html) ──
    "raw.statWasteTitle": "Total Waste Traded",
    "raw.statWasteUnit": "Tons",
    "raw.statWasteTrend": "+12.4% this month",
    "raw.statCo2Title": "CO₂ Saved",
    "raw.statCo2Unit": "MT",
    "raw.statCo2Trend": "+8.7% this month",
    "raw.statActiveTitle": "Active Listings",
    "raw.statActiveUnit": "Listings",
    "raw.statActiveTrend": "6 new today",
    "raw.filterTitle": "Filters",
    "raw.filterCategory": "Category",
    "raw.catFood": "Food Waste",
    "raw.catSoy": "Soy Waste",
    "raw.catFruit": "Fruit Peels",
    "raw.catBiomass": "Biomass",
    "raw.filterDistance": "Distance",
    "raw.maxDist": "Max 30km",
    "raw.filterListingType": "Listing Type",
    "raw.typeSale": "For Sale",
    "raw.typeFree": "Free Pickup",
    "raw.btnApply": "Apply Filters",
    "raw.gridHeading": "Active Listings",
    "raw.sortBy": "Sort by:",
    "raw.sortNewest": "Newest",
    "raw.sortPriceLow": "Price: Low → High",
    "raw.sortPriceHigh": "Price: High → Low",
    "raw.sortDistance": "Distance",
    "raw.cardPrice": "Price",
    "raw.cardPerTon": "/ Ton",
    "raw.cardFreePickup": "FREE pickup",
    "raw.btnMakeOffer": "Make Offer / Reserve",
    "raw.btnLoadMore": "Load More Listings",
    "raw.tagGradeA": "Grade A",
    "raw.tagGradeB": "Grade B",
    "raw.tagHighMoisture": "High Moisture",
    "raw.tagFermented": "Fermented",
    "raw.logisticsPickupOrTruck": "Self-Pickup or Truck Delivery",
    "raw.logisticsTruckOnly": "Truck Delivery Available",
    "raw.logisticsSelfPickup": "Self-Pickup Only",

    // ── Supplier Listing Form (list-waste.html) ──
    "form.stepBadge": "Supplier Gateway",
    "form.title": "Post your organic waste",
    "form.desc": "Connect your industrial, agricultural, or commercial byproducts directly with verified bio-processors, composters, and feed producers.",
    "form.step1": "Type & Qty",
    "form.step2": "Quality",
    "form.step3": "Logistics",
    "form.step4": "Pricing & Legal",
    "form.sec1Title": "Type & Quantity",
    "form.wasteTypeLabel": "Waste Type",
    "form.wasteTypeSelect": "Select waste category…",
    "form.wasteCoffee": "Used Coffee Grounds",
    "form.wasteSpentGrain": "Brewery Spent Grain",
    "form.wasteSoy": "Soybean Meal / Okara Residue",
    "form.wasteFruit": "Mixed Citrus & Fruit Peels",
    "form.wasteRiceHusk": "Rice Husk & Chaff Biomass",
    "form.wasteVeg": "Vegetable Processing Waste",
    "form.wasteBagasse": "Sugarcane Bagasse",
    "form.wasteOther": "Other Organic Byproducts",
    "form.weightLabel": "Available Weight",
    "form.sec2Title": "Quality Assessment",
    "form.moistureLabel": "Moisture Level",
    "form.moistLow": "Low",
    "form.moistLowDesc": "< 15% (Dry)",
    "form.moistMed": "Medium",
    "form.moistMedDesc": "15% – 50%",
    "form.moistHigh": "High",
    "form.moistHighDesc": "> 50% (Wet)",
    "form.plasticsTitle": "Separated / Zero Plastics Verified",
    "form.plasticsDesc": "Organic stream is free of inorganic packaging, chemicals, micro-plastics, and metal contaminants.",
    "form.sec3Title": "Logistics & Location",
    "form.fulfillLabel": "Fulfillment Method",
    "form.fulfillBuyer": "Buyer must pickup",
    "form.fulfillBuyerDesc": "Pickup directly at facility bay",
    "form.fulfillSupplier": "I can deliver",
    "form.fulfillSupplierDesc": "Supplier truck fleet delivery",
    "form.locationLabel": "Facility Location Pin",
    "form.detectGps": "Detect current GPS",
    "form.mapPinHelper": "Drag pin to reposition",
    "form.mapVerified": "Google Maps verified location for carrier pickup & route optimization",
    "form.sec4Title": "Commercial Terms & Pricing",
    "form.freeToggle": "Give away for free",
    "form.freeToggleDesc": "Offer zero charge for immediate waste pickup & landfill diversion",
    "form.priceLabel": "Price per Ton (THB ฿)",
    "form.priceReference": "Standard market reference for this category: ฿350 – ฿600 / Ton",
    "form.publishBtn": "Publish Listing",
    "form.publishNote": "By publishing, your listing will be immediately broadcast to 340+ verified bio-economy off-takers.",
    "form.toastTitle": "Listing Published Successfully!",
    "form.toastLive": "Live",
    "form.toastViewMarket": "View in Marketplace",
    "form.toastPostAnother": "Post Another",

    // ── Legal & Compliance System (PDPA & Strict Terms) ──
    "legal.secTitle": "Legal Compliance & Guarantees",
    "legal.secDesc": "Mandatory consent required under the Thailand PDPA and biotrade Quality Assurance framework.",
    "legal.pdpaLabel": "I acknowledge and agree to the biotrade PDPA Data Disclosure & Privacy Policy for trade settlement, carbon verification, and logistics tracking.",
    "legal.pdpaView": "View Policy Details",
    "legal.tosLabel": "Strict Terms of Service (ToS): Sellers are fully responsible for all return shipping costs and platform penalties if the delivered waste contains plastic contamination or exceeds the declared rot/moisture levels.",
    "legal.warningRequired": "You must agree to both the PDPA Policy and Strict Terms of Service before proceeding.",
    "legal.modalTitle": "Thailand PDPA Compliance & Quality Charter",
    "legal.modalClose": "I Understand & Accept",

    // ── User Dashboard Portal (dashboard.html) ──
    "dash.title": "Operations & ESG Command Center",
    "dash.subtitle": "Manage your bio-resource listings, financial settlements, and certified carbon offset impact.",
    "dash.tabProfile": "User Profile",
    "dash.tabListings": "Listing Management",
    "dash.tabLedger": "Ledger & 10% GP",
    "dash.tabEsg": "ESG Impact & Certificate",

    // Profile Tab
    "dash.profileTitle": "Enterprise & Facility Profile",
    "dash.profileDesc": "Keep your facility credentials, contact, and logistics coordinates up to date for smooth off-taking.",
    "dash.shopName": "Shop / Farm / Enterprise Name",
    "dash.contactPerson": "Contact Person",
    "dash.phone": "Phone Number",
    "dash.email": "Business Email",
    "dash.address": "Dispatch & Facility Pickup Bay Address",
    "dash.role": "Platform Operating Role",
    "dash.roleSeller": "Seller (Waste Producer / Restaurant)",
    "dash.roleBuyer": "Buyer (Bio-Processor / Compost / Off-taker)",
    "dash.roleBoth": "Dual Gateway (Both Seller & Buyer)",
    "dash.taxId": "Tax Identification / Registration No.",
    "dash.saveProfile": "Save Profile Changes",
    "dash.profileSaved": "Profile successfully saved to verified ledger!",

    // Listings Tab
    "dash.listingsTitle": "Waste & Surplus Listing Inventory",
    "dash.btnCreateNew": "+ Post New Stream",
    "dash.colPhoto": "Photo",
    "dash.colTitle": "Listing Title & Category",
    "dash.colWeight": "Available Weight",
    "dash.colPrice": "Unit Price",
    "dash.colStatus": "Live Status",
    "dash.colActions": "Actions",
    "dash.statusAvailable": "Active / Available",
    "dash.statusSold": "Traded / Sold",
    "dash.statusReserved": "Reserved (Escrow)",
    "dash.btnToggle": "Toggle Status",
    "dash.btnDelete": "Delete",
    "dash.noListings": "No listings recorded yet. Post a stream to begin trading.",

    // Ledger Tab (Platform GP Calculation)
    "dash.ledgerTitle": "Transaction & Settlement Ledger",
    "dash.ledgerDesc": "Automated transparent platform reconciliation with standard 10% Platform Gross Profit (GP) deduction for buyer verification and quality escrow.",
    "dash.statGrossRevenue": "Cumulative Gross Volume",
    "dash.statPlatformGp": "Platform Fee (10% GP)",
    "dash.statNetPayout": "Net Seller Payout (90%)",
    "dash.statTotalOrders": "Completed Trades",
    "dash.colOrderNo": "Order Ref",
    "dash.colDate": "Date",
    "dash.colItem": "Trade Item",
    "dash.colBuyer": "Counterparty",
    "dash.colGross": "Gross Value",
    "dash.colCommission": "10% Platform GP",
    "dash.colNet": "Net Payout",
    "dash.colSettlement": "Settlement Status",
    "dash.statusCompleted": "Settled & Transferred",
    "dash.statusEscrow": "In Escrow Holding",

    // ESG Engine & Impact Tab
    "dash.esgTitle": "Certified Carbon Footprint (CO₂e) Impact Dashboard",
    "dash.esgDesc": "Real-time calculation of avoided methane emission using IPCC & T-VER circular carbon modeling.",
    "dash.cardTotalCo2": "Total CO₂e Saved",
    "dash.cardTons": "Metric Tons",
    "dash.cardWasteDiverted": "Organic Waste Diverted",
    "dash.cardTreesEq": "Urban Tree Absorption Eq.",
    "dash.cardTreesUnit": "Trees / Year",
    "dash.cardCarKm": "Gasoline Car Mileage Offset",
    "dash.cardCarUnit": "Kilometers",
    "dash.calcTitle": "Interactive Carbon Offset Calculator",
    "dash.calcSelectType": "Select Organic Waste Stream",
    "dash.calcInputWeight": "Enter Weight (Tons)",
    "dash.calcBtn": "Calculate Impact",
    "dash.calcResult": "Calculated Avoided Emissions:",
    "dash.certTitle": "Verified Carbon Offset & Circular Diversion Certificate",
    "dash.certSubtitle": "Official ESG disclosure document for corporate sustainability reporting (GRI 306 & SEC ESG).",
    "dash.certDownload": "Download / Print Official PDF Certificate",
    "dash.certIssuer": "Issued by biotrade ESG Verification Engine",
    "dash.certHash": "Verification Hash",
    "dash.certStandard": "Methodology: ISO 14064-2:2019 Circular Biomass Standard",

    // Dynamic Waste Categories
    "cat.coffee": "Used Coffee Grounds",
    "cat.spent_grain": "Brewery Spent Grain",
    "cat.soy": "Soybean Meal / Okara Residue",
    "cat.fruit": "Citrus & Fruit Peels",
    "cat.rice_husk": "Rice Husk & Biomass",
    "cat.bagasse": "Sugarcane Bagasse",
    "cat.veg": "Vegetable Processing Waste",
    "cat.food_waste": "Commercial Food Waste",
    "cat.surplus_meal": "Rescued Surplus Meals",
    "cat.other": "Organic Waste Stream"
  },
    // ── Authentication & Supabase ──
    "auth.signIn": "Sign In",
    "auth.signUp": "Sign Up",
    "auth.signOut": "Sign Out",
    "auth.email": "Email Address",
    "auth.password": "Password",
    "auth.verifyNotice": "Please verify your email",
    "auth.loginRegister": "Sign In / Register",

    // ── B2B Negotiation Room & Order Confirmation ──
    "raw.btnNegotiate": "Negotiate & Close Deal",
    "raw.dealRoomTitle": "B2B Deal Negotiation & Escrow Room",
    "raw.dealStatusNegotiating": "In Active Negotiation",
    "raw.dealStatusClosed": "Order Confirmed & Deal Closed",
    "raw.sendCounterOffer": "Submit Counter-Offer",
    "raw.confirmDeal": "Confirm Order & Close Deal",
    "raw.chatPlaceholder": "Type negotiation terms or ask about moisture / quality...",
    "raw.dealSummary": "Agreed Commercial Terms",
    "raw.orderSuccess": "Order Confirmed! Recorded in Settlement Ledger with 10% GP.",

  th: {
    // ── Universal Navbar ──
    "nav.gateway": "หน้าแรก",
    "nav.eats": "กู้อาหาร (Eats)",
    "nav.raw": "ตลาดขยะ (Raw)",
    "nav.postWaste": "ลงประกาศขยะ",
    "nav.dashboard": "แดชบอร์ด & ESG",
    "nav.enterRaw": "ตลาดขยะ",
    "nav.eatsB2c": "อาหาร",
    "nav.newListing": "+ สร้างประกาศ",
    "nav.esgReport": "รายงาน ESG",
    "nav.myListings": "ประกาศของฉัน",
    "nav.backMarket": "กลับสู่ตลาด",

    // ── Gateway Landing Page (index.html) ──
    "gateway.badge": "ขับเคลื่อนเศรษฐกิจหมุนเวียน",
    "gateway.heroTitle": "กู้อาหารอร่อย แลกเปลี่ยนขยะอินทรีย์<br /><span class=\"shimmer-text\">มุ่งสู่เป้าหมายขยะเป็นศูนย์</span>",
    "gateway.heroDesc": "แพลตฟอร์มทวิภาคีที่เชื่อมต่อผู้บริโภคเข้ากับอาหารส่วนเกิน และเชื่อมโยงภาคอุตสาหกรรมสู่วงจรขยะอินทรีย์มูลค่าสูง",
    "gateway.scrollHint": "เลือกบริการที่คุณต้องการเพื่อเริ่มต้น",
    "gateway.eatsBadge": "กู้ภัยอาหารส่วนเกิน B2C",
    "gateway.eatsDesc": "ช่วยกู้อาหารส่วนเกินแสนอร่อย เบเกอรี่ และผลผลิตสดจากร้านอาหาร คาเฟ่ และซูเปอร์มาร์เก็ตในราคาลด 50–70% ทุกถุงช่วยลดคาร์บอนและช่วยโลก",
    "gateway.eatsTag1": "ลดสูงสุด 70%",
    "gateway.eatsTag2": "ถุงสุ่ม Surprise Bag",
    "gateway.eatsTag3": "ขยะเป็นศูนย์",
    "gateway.eatsBtn": "เข้าสู่ biotrade eats",
    "gateway.rawBadge": "เปลี่ยนขยะเป็นมูลค่า B2B",
    "gateway.rawDesc": "เชื่อมโยงโรงงานแปรรูปอาหาร โรงเบียร์ และภาคเกษตรเข้ากับผู้รับซื้อที่ผ่านการตรวจสอบ ซื้อขายกากกาแฟ กากเบียร์ เปลือกผลไม้ และชีวมวลในระดับอุตสาหกรรม",
    "gateway.rawTag1": "ระดับอุตสาหกรรม",
    "gateway.rawTag2": "ผู้ซื้อผ่านการตรวจสอบ",
    "gateway.rawTag3": "ตรวจสอบ ESG ได้",
    "gateway.rawBtn": "เข้าสู่ตลาด biotrade raw",
    "gateway.statMeals": "มื้ออาหารที่กู้ภัยได้",
    "gateway.statPartners": "ธุรกิจพาร์ทเนอร์",
    "gateway.statWaste": "ขยะที่เบี่ยงเบนจากหลุมฝังกลบ",
    "gateway.footerCopy": "&copy; 2026 biotrade · ขับเคลื่อนเศรษฐกิจ BCG ในเอเชียตะวันออกเฉียงใต้",

    // ── Eats Dashboard (eats.html) ──
    "eats.heroTitle": "คว้าถุงสุ่มอาหาร Surprise Bag ก่อนจะหมด!",
    "eats.heroDesc": "อาหารส่วนเกินรสเลิศจากร้านอาหาร เบเกอรี่ และซูเปอร์มาร์เก็ตชั้นนำในนครปฐม ในราคาลดพิเศษสูงสุดถึง 70%",
    "eats.searchPlaceholder": "ค้นหาร้านอาหาร, เบเกอรี่, ซูเปอร์มาร์เก็ต…",
    "eats.filterAll": "ทั้งหมด",
    "eats.filterBakery": "เบเกอรี่",
    "eats.filterMeals": "อาหารจานหลัก",
    "eats.filterSupermarket": "ซูเปอร์มาร์เก็ต",
    "eats.filterVegetarian": "มังสวิรัติ",
    "eats.availTitle": "ถุงสุ่มอาหาร Surprise Bag ใกล้คุณ",
    "eats.availSubtitle": "รับอาหารสดใหม่ราคาประหยัด และร่วมกู้ภัยอาหารไปด้วยกันวันนี้",
    "eats.badgeLeft": "เหลือ",
    "eats.reserveBtn": "จองทันที",
    "eats.reservedBtn": "จองสำเร็จแล้ว!",
    "eats.bottomHome": "หน้าแรก",
    "eats.bottomMap": "แผนที่ร้าน",
    "eats.bottomOrders": "คำสั่งซื้อ",
    "eats.bottomProfile": "โปรไฟล์",
    "eats.mapTitle": "แผนที่ร้าน Surprise Bag",
    "eats.mapSubtitle": "จุดกู้ภัยอาหารที่เปิดให้บริการ 6 แห่งในนครปฐม",
    "eats.mapClose": "ปิดแผนที่",

    // ── Raw Marketplace (raw.html) ──
    "raw.statWasteTitle": "ปริมาณขยะที่ซื้อขายทั้งหมด",
    "raw.statWasteUnit": "ตัน",
    "raw.statWasteTrend": "+12.4% เดือนนี้",
    "raw.statCo2Title": "ลดการปล่อย CO₂",
    "raw.statCo2Unit": "ตันคาร์บอน (MT)",
    "raw.statCo2Trend": "+8.7% เดือนนี้",
    "raw.statActiveTitle": "ประกาศที่เปิดรับซื้อขาย",
    "raw.statActiveUnit": "รายการ",
    "raw.statActiveTrend": "6 รายการใหม่วันนี้",
    "raw.filterTitle": "ตัวกรองค้นหา",
    "raw.filterCategory": "หมวดหมู่ขยะ",
    "raw.catFood": "ขยะเศษอาหาร",
    "raw.catSoy": "กากถั่วเหลือง/เต้าหู้",
    "raw.catFruit": "เปลือกผลไม้",
    "raw.catBiomass": "ชีวมวล/แกลบข้าว",
    "raw.filterDistance": "ระยะทาง",
    "raw.maxDist": "สูงสุด 30 กม.",
    "raw.filterListingType": "ประเภทประกาศ",
    "raw.typeSale": "สำหรับขาย",
    "raw.typeFree": "รับฟรี (ไม่คิดเงิน)",
    "raw.btnApply": "ใช้งานตัวกรอง",
    "raw.gridHeading": "ประกาศซื้อขายที่เปิดอยู่",
    "raw.sortBy": "เรียงตาม:",
    "raw.sortNewest": "ใหม่ล่าสุด",
    "raw.sortPriceLow": "ราคา: ต่ำ → สูง",
    "raw.sortPriceHigh": "ราคา: สูง → ต่ำ",
    "raw.sortDistance": "ระยะทางใกล้สุด",
    "raw.cardPrice": "ราคา",
    "raw.cardPerTon": "/ ตัน",
    "raw.cardFreePickup": "รับฟรี (ฟรี)",
    "raw.btnMakeOffer": "ยื่นข้อเสนอซื้อ / จองทันที",
    "raw.btnLoadMore": "โหลดประกาศเพิ่มเติม",
    "raw.tagGradeA": "เกรด A",
    "raw.tagGradeB": "เกรด B",
    "raw.tagHighMoisture": "ความชื้นสูง",
    "raw.tagFermented": "ผ่านการหมัก",
    "raw.logisticsPickupOrTruck": "รับเอง หรือจัดส่งด้วยรถบรรทุก",
    "raw.logisticsTruckOnly": "มีบริการส่งด้วยรถบรรทุก",
    "raw.logisticsSelfPickup": "รับสินค้าเองเท่านั้น",

    // ── Supplier Listing Form (list-waste.html) ──
    "form.stepBadge": "เกตเวย์ผู้จำหน่าย",
    "form.title": "ลงประกาศขยะอินทรีย์ของคุณ",
    "form.desc": "เชื่อมโยงผลพลอยได้ทางอุตสาหกรรม เกษตรกรรม หรือการค้าของคุณกับผู้แปรรูปทางชีวภาพ โรงปุ๋ยหมัก และผู้ผลิตอาหารสัตว์ที่ผ่านการตรวจสอบ",
    "form.step1": "ประเภท & ปริมาณ",
    "form.step2": "คุณภาพ",
    "form.step3": "การขนส่ง",
    "form.step4": "ราคาและกฎหมาย",
    "form.sec1Title": "ประเภทและปริมาณขยะ",
    "form.wasteTypeLabel": "ประเภทขยะอินทรีย์",
    "form.wasteTypeSelect": "เลือกหมวดหมู่วัตถุดิบขยะ…",
    "form.wasteCoffee": "กากกาแฟใช้แล้ว (Used Coffee Grounds)",
    "form.wasteSpentGrain": "กากมอลต์โรงเบียร์ (Spent Grain)",
    "form.wasteSoy": "กากถั่วเหลือง / กากเต้าหู้ (Okara)",
    "form.wasteFruit": "เปลือกส้มและเปลือกผลไม้รวม",
    "form.wasteRiceHusk": "แกลบข้าวและชีวมวลเกษตร",
    "form.wasteVeg": "เศษผักจากโรงงานแปรรูปอาหาร",
    "form.wasteBagasse": "ชานอ้อย (Sugarcane Bagasse)",
    "form.wasteOther": "ผลพลอยได้อินทรีย์อื่น ๆ",
    "form.weightLabel": "ปริมาณน้ำหนักที่มี",
    "form.sec2Title": "การประเมินคุณภาพ",
    "form.moistureLabel": "ระดับความชื้น",
    "form.moistLow": "ต่ำ (Low)",
    "form.moistLowDesc": "< 15% (แห้ง)",
    "form.moistMed": "ปานกลาง (Medium)",
    "form.moistMedDesc": "15% – 50%",
    "form.moistHigh": "สูง (High)",
    "form.moistHighDesc": "> 50% (เปียก)",
    "form.plasticsTitle": "คัดแยกแล้ว / ปลอดพลาสติก 100%",
    "form.plasticsDesc": "ยืนยันว่าไม่มีบรรจุภัณฑ์อนินทรีย์ สารเคมีตกค้าง ไมโครพลาสติก หรือโลหะเจือปน",
    "form.sec3Title": "การขนส่งและสถานที่",
    "form.fulfillLabel": "วิธีการส่งมอบสินค้า",
    "form.fulfillBuyer": "ผู้ซื้อต้องมารับเอง",
    "form.fulfillBuyerDesc": "รับสินค้าเองที่ลานโหลดสินค้าโรงงาน",
    "form.fulfillSupplier": "ผู้ขายจัดส่งให้",
    "form.fulfillSupplierDesc": "จัดส่งด้วยกองรถบรรทุกของผู้ขาย",
    "form.locationLabel": "ปักหมุดพิกัดสถานที่/โรงงาน",
    "form.detectGps": "ค้นหาพิกัด GPS ปัจจุบัน",
    "form.mapPinHelper": "ลากหมุดเพื่อเปลี่ยนตำแหน่ง",
    "form.mapVerified": "ยืนยันพิกัดผ่าน Google Maps สำหรับการคำนวณเส้นทางและเรียกรถขนส่ง",
    "form.sec4Title": "เงื่อนไขการค้าและราคา",
    "form.freeToggle": "มอบให้ฟรี (ไม่คิดมูลค่า)",
    "form.freeToggleDesc": "เปิดรับให้เข้ามารับฟรีทันที เพื่อลดภาระการกำจัดและเบี่ยงเบนขยะจากหลุมฝังกลบ",
    "form.priceLabel": "ราคาต่อตัน (บาท ฿)",
    "form.priceReference": "ราคาอ้างอิงเฉลี่ยในตลาดสำหรับหมวดนี้: ฿350 – ฿600 / ตัน",
    "form.publishBtn": "เผยแพร่ประกาศทันที",
    "form.publishNote": "เมื่อเผยแพร่ ประกาศของคุณจะถูกส่งต่อให้ผู้รับซื้อชีวมวลกว่า 340+ รายทันที",
    "form.toastTitle": "ลงประกาศสำเร็จแล้ว!",
    "form.toastLive": "ออนไลน์",
    "form.toastViewMarket": "ดูประกาศในตลาด",
    "form.toastPostAnother": "ลงประกาศเพิ่มอีกรายการ",

    // ── Legal & Compliance System (PDPA & Strict Terms) ──
    "legal.secTitle": "การปฏิบัติตามกฎหมายและความยินยอม PDPA",
    "legal.secDesc": "ข้อตกลงภาคบังคับภายใต้ พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA) และมาตรฐานการรับรองคุณภาพของ biotrade",
    "legal.pdpaLabel": "ข้าพเจ้ายินยอมตามนโยบายคุ้มครองข้อมูลส่วนบุคคล (PDPA) ในการเก็บ รวบรวม และเปิดเผยข้อมูลเพื่อการจับคู่คู่ค้า การคำนวณสิทธิคาร์บอน และการขนส่ง",
    "legal.pdpaView": "อ่านข้อกำหนดนโยบายฉบับเต็ม",
    "legal.tosLabel": "ข้าพเจ้ายอมรับเงื่อนไขการใช้งาน และรับทราบว่าหากขยะที่ส่งมอบมีการปนเปื้อนพลาสติกหรือเน่าเสียเกินกว่าที่ระบุ ผู้ขายจะต้องรับผิดชอบค่าใช้จ่ายในการขนส่งกลับทั้งหมด",
    "legal.warningRequired": "กรุณายอมรับทั้งข้อกำหนด PDPA และข้อกำหนดความรับผิดชอบอย่างเคร่งครัดก่อนดำเนินการต่อ",
    "legal.modalTitle": "นโยบายคุ้มครองข้อมูลส่วนบุคคล (PDPA) และมาตรฐานคุณภาพวัตถุดิบ",
    "legal.modalClose": "ข้าพเจ้าเข้าใจและยอมรับเงื่อนไข",

    // ── User Dashboard Portal (dashboard.html) ──
    "dash.title": "ศูนย์บัญชาการปฏิบัติการ & ผลกระทบ ESG",
    "dash.subtitle": "จัดการประกาศวัตถุดิบชีวมวล บัญชีการเงินส่วนแบ่งแพลตฟอร์ม และใบรับรองการลดคาร์บอนเครดิต",
    "dash.tabProfile": "โปรไฟล์สถานประกอบการ",
    "dash.tabListings": "จัดการประกาศวัตถุดิบ",
    "dash.tabLedger": "บัญชีการเงิน & ส่วนแบ่ง GP 10%",
    "dash.tabEsg": "ผลกระทบ ESG & ใบรับรอง",

    // Profile Tab
    "dash.profileTitle": "ข้อมูลสถานประกอบการและโรงงาน",
    "dash.profileDesc": "อัปเดตข้อมูลสถานที่ พิกัด และผู้ติดต่อ เพื่อความถูกต้องในการส่งมอบสินค้าและเรียกรถขนส่ง",
    "dash.shopName": "ชื่อฟาร์ม / ร้านค้า / สถานประกอบการ",
    "dash.contactPerson": "ชื่อผู้ติดต่อประสานงาน",
    "dash.phone": "เบอร์โทรศัพท์ที่ติดต่อได้",
    "dash.email": "อีเมลติดต่อทางธุรกิจ",
    "dash.address": "ที่อยู่โรงงาน / ลานโหลดสินค้าสำหรับรับของ",
    "dash.role": "บทบาทในแพลตฟอร์ม",
    "dash.roleSeller": "ผู้ขาย (แหล่งกำเนิดขยะ / ร้านอาหาร)",
    "dash.roleBuyer": "ผู้ซื้อ (โรงงานแปรรูปชีวภาพ / โรงปุ๋ย / ผู้รับซื้อ)",
    "dash.roleBoth": "ทั้งสองบทบาท (เป็นทั้งผู้ซื้อและผู้ขาย)",
    "dash.taxId": "เลขประจำตัวผู้เสียภาษี / ทะเบียนพาณิชย์",
    "dash.saveProfile": "บันทึกข้อมูลโปรไฟล์",
    "dash.profileSaved": "บันทึกข้อมูลลงฐานข้อมูลเรียบร้อยแล้ว!",

    // Listings Tab
    "dash.listingsTitle": "คลังรายการประกาศของคุณ",
    "dash.btnCreateNew": "+ ลงประกาศใหม่",
    "dash.colPhoto": "รูปถ่าย",
    "dash.colTitle": "ชื่อประกาศ & หมวดหมู่",
    "dash.colWeight": "ปริมาณที่มี",
    "dash.colPrice": "ราคาต่อหน่วย",
    "dash.colStatus": "สถานะการขาย",
    "dash.colActions": "การจัดการ",
    "dash.statusAvailable": "เปิดรับซื้อขาย",
    "dash.statusSold": "ปิดการขายแล้ว",
    "dash.statusReserved": "อยู่ระหว่างจอง (Escrow)",
    "dash.btnToggle": "สลับสถานะ",
    "dash.btnDelete": "ลบประกาศ",
    "dash.noListings": "ยังไม่มีรายการประกาศ ลงประกาศขยะชิ้นแรกเพื่อเริ่มการซื้อขาย",

    // Ledger Tab (Platform GP Calculation)
    "dash.ledgerTitle": "บัญชีบันทึกธุรกรรมการค้า & ส่วนแบ่ง GP แพลตฟอร์ม",
    "dash.ledgerDesc": "ระบบคำนวณหักส่วนแบ่งแพลตฟอร์มมาตรฐาน 10% (Gross Profit Commission) อัตโนมัติ เพื่อเป็นค่าตรวจสอบคุณภาพและระบบเงินประกัน Escrow",
    "dash.statGrossRevenue": "ยอดขายรวม (Gross Volume)",
    "dash.statPlatformGp": "ส่วนแบ่งแพลตฟอร์ม (10% GP)",
    "dash.statNetPayout": "ยอดรับสุทธิของผู้ขาย (90%)",
    "dash.statTotalOrders": "จำนวนธุรกรรมสำเร็จ",
    "dash.colOrderNo": "รหัสคำสั่งซื้อ",
    "dash.colDate": "วันที่",
    "dash.colItem": "รายการสินค้า",
    "dash.colBuyer": "คู่ค้าที่ทำธุรกรรม",
    "dash.colGross": "ยอดเงินรวม (บาท)",
    "dash.colCommission": "ค่าธรรมเนียม GP 10%",
    "dash.colNet": "ยอดรับสุทธิ (บาท)",
    "dash.colSettlement": "สถานะการโอนเงิน",
    "dash.statusCompleted": "โอนเงินเรียบร้อยแล้ว",
    "dash.statusEscrow": "รอตรวจสอบสินค้า (Escrow)",

    // ESG Engine & Impact Tab
    "dash.esgTitle": "แดชบอร์ดผลกระทบคาร์บอนฟุตพริ้นท์ (CO₂e) ที่ได้รับการรับรอง",
    "dash.esgDesc": "คำนวณการลดก๊าซมีเทนจากการเบี่ยงเบนขยะไม่ให้ลงสู่หลุมฝังกลบตามแบบจำลอง IPCC และ T-VER",
    "dash.cardTotalCo2": "ลดการปล่อยก๊าซ CO₂e รวม",
    "dash.cardTons": "ตันคาร์บอน (MT)",
    "dash.cardWasteDiverted": "ขยะอินทรีย์ที่นำกลับมาใช้ประโยชน์",
    "dash.cardTreesEq": "เทียบเท่าการดูดซับของต้นไม้",
    "dash.cardTreesUnit": "ต้น / ปี",
    "dash.cardCarKm": "เทียบเท่าการลดระยะทางรถยนต์",
    "dash.cardCarUnit": "กิโลเมตร",
    "dash.calcTitle": "เครื่องคำนวณการลดคาร์บอนแบบจำลอง (Carbon Calculator)",
    "dash.calcSelectType": "เลือกหมวดหมู่วัตถุดิบขยะอินทรีย์",
    "dash.calcInputWeight": "ระบุน้ำหนัก (ตัน)",
    "dash.calcBtn": "คำนวณปริมาณคาร์บอนที่ลดได้",
    "dash.calcResult": "ปริมาณคาร์บอนที่คาดว่าจะลดได้:",
    "dash.certTitle": "ใบรับรองการชดเชยคาร์บอนและการจัดการขยะหมุนเวียน",
    "dash.certSubtitle": "เอกสารรับรองมาตรฐาน ESG สำหรับรายงานความยั่งยืนประจำปีขององค์กร (GRI 306 & ตลาดหลักทรัพย์ฯ)",
    "dash.certDownload": "ดาวน์โหลด / สั่งพิมพ์ใบรับรองทางการ (PDF Certificate)",
    "dash.certIssuer": "ออกโดย ระบบตรวจสอบความยั่งยืน biotrade ESG Engine",
    "dash.certHash": "รหัสตรวจสอบความถูกต้อง (Verification Hash)",
    "dash.certStandard": "มาตรฐานอ้างอิง: ISO 14064-2:2019 Circular Biomass Standard",

    // Dynamic Waste Categories
    "cat.coffee": "กากกาแฟใช้แล้ว",
    "cat.spent_grain": "กากมอลต์โรงเบียร์",
    "cat.soy": "กากถั่วเหลือง/กากเต้าหู้ (Okara)",
    "cat.fruit": "เปลือกส้มและผลไม้รวม",
    "cat.rice_husk": "แกลบข้าวและชีวมวล",
    "cat.bagasse": "ชานอ้อยอุตสาหกรรม",
    "cat.veg": "เศษผักโรงงานแปรรูป",
    "cat.food_waste": "เศษอาหารเชิงพาณิชย์",
    "cat.surplus_meal": "มื้ออาหารส่วนเกินที่กู้ภัย",
    "cat.other": "วัตถุดิบขยะอินทรีย์ทั่วไป",

    // ── Authentication & Supabase ──
    "auth.signIn": "เข้าสู่ระบบ",
    "auth.signUp": "สมัครสมาชิก",
    "auth.signOut": "ออกจากระบบ",
    "auth.email": "อีเมล",
    "auth.password": "รหัสผ่าน",
    "auth.verifyNotice": "กรุณายืนยันอีเมลของคุณ",
    "auth.loginRegister": "เข้าสู่ระบบ / สมัคร",

    // ── B2B Negotiation Room & Order Confirmation ──
    "raw.btnNegotiate": "ยื่นข้อเสนอซื้อ / จองทันที",
    "raw.dealRoomTitle": "ห้องเจรจาซื้อขาย & สัญญาซื้อขาย B2B",
    "raw.dealStatusNegotiating": "กำลังเจรจาซื้อขาย (Active)",
    "raw.dealStatusClosed": "ยืนยันการสั่งซื้อ & ปิดดีลสำเร็จ",
    "raw.sendCounterOffer": "ส่งข้อเสนอราคาใหม่",
    "raw.confirmDeal": "ยืนยันการสั่งซื้อ & ปิดดีล",
    "raw.chatPlaceholder": "พิมพ์ข้อความเจรจาต่อรอง หรือสอบถามระดับความชื้น/การขนส่ง...",
    "raw.dealSummary": "สรุปเงื่อนไขสัญญาการค้า",
    "raw.orderSuccess": "ยืนยันการสั่งซื้อสำเร็จ! บันทึกเข้าระบบบัญชีและออกใบรับรอง ESG แล้ว"

  }
};

/**
 * Get the currently active language (defaults to 'en')
 */
function getCurrentLanguage() {
  if (typeof localStorage === 'undefined') return 'th';
  return localStorage.getItem('biotrade_lang') || 'th';
}

/**
 * Helper translation lookup
 */
function t(key, defaultVal = '') {
  const lang = getCurrentLanguage();
  const dict = translations[lang] || translations.en;
  return dict[key] !== undefined ? dict[key] : (translations.en[key] !== undefined ? translations.en[key] : defaultVal || key);
}

/**
 * Helper to translate dynamic category keys
 */
function translateCategory(typeKey) {
  const k = "cat." + (typeKey || "other").toLowerCase();
  return t(k, typeKey);
}

/**
 * Set and apply the active language
 * @param {string} lang - 'en' or 'th'
 */
function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'th') lang = 'th';
  localStorage.setItem('biotrade_lang', lang);
  document.documentElement.lang = lang;

  const dict = translations[lang] || translations.en;

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Update switcher button highlights
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === lang) {
      btn.classList.add('active-lang', 'bg-neon', 'text-slate-950', 'font-extrabold', 'shadow-sm', 'shadow-neon/30');
      btn.classList.remove('text-white/50');
    } else {
      btn.classList.remove('active-lang', 'bg-neon', 'text-slate-950', 'font-extrabold', 'shadow-sm', 'shadow-neon/30');
      btn.classList.add('text-white/50');
    }
  });

  // Dispatch custom event for page-specific hooks
  window.dispatchEvent(new CustomEvent('biotrade_lang_changed', { detail: { lang } }));
}

/**
 * Toggle between 'en' and 'th'
 */
function toggleLanguage() {
  const current = getCurrentLanguage();
  setLanguage(current === 'en' ? 'th' : 'en');
}

// Attach helpers to window
if (typeof window !== 'undefined') {
  window.t = t;
  window.translateCategory = translateCategory;
}

// Auto-initialize on DOM ready
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const lang = getCurrentLanguage();
        setLanguage(lang);
  });
}
