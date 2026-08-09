export const workspaceTypes = [
  "brand_owner",
  "dropshipper",
  "manufacturer",
  "supplier",
  "sourcing_agent",
  "designer",
  "quality_inspector",
  "logistics_partner",
  "warehouse_partner",
  "marketing_partner",
  "super_admin",
] as const;

export type WorkspaceType = (typeof workspaceTypes)[number];

export const workspaceLabels: Record<WorkspaceType, string> = {
  brand_owner: "Brand Owner",
  dropshipper: "Dropshipper",
  manufacturer: "Manufacturer",
  supplier: "Supplier",
  sourcing_agent: "Sourcing Agent",
  designer: "Designer",
  quality_inspector: "Quality Inspector",
  logistics_partner: "Logistics Partner",
  warehouse_partner: "Warehouse Partner",
  marketing_partner: "Marketing Partner",
  super_admin: "Super Admin",
};

export const dashboardNavigation: Partial<Record<WorkspaceType, string[]>> = {
  brand_owner: ["Overview", "My Brands", "Products", "Product Research", "Manufacturers", "Suppliers", "RFQs", "Samples", "AI Brand Studio", "Packaging Studio", "Website Builder", "Sales Channels", "Orders", "Inventory", "Fulfillment", "Marketing", "Analytics", "Finance", "Messages", "Settings"],
  dropshipper: ["Overview", "Winning Products", "Product Research", "Supplier Marketplace", "Imported Products", "My Stores", "Website Builder", "Sales Channels", "Orders", "Auto Fulfillment", "Inventory Sync", "Shipping", "Returns", "Marketing", "Profit Analytics", "Messages", "Settings"],
  manufacturer: ["Overview", "Factory Profile", "Product Catalog", "OEM / ODM", "RFQs", "Sample Requests", "Custom Manufacturing", "Tech Packs", "Production", "Quality Control", "Bulk Orders", "Buyers", "Shipping", "Payments", "Analytics", "Messages", "Files", "Settings"],
  supplier: ["Overview", "Products", "Inventory", "Price Tiers", "Dropshipping Products", "Sample Orders", "Buyer Orders", "Fulfillment", "Returns", "Customers", "Payments", "Analytics", "Messages", "Settings"],
  logistics_partner: ["Overview", "Shipment Requests", "Shipments", "Pickup Requests", "Freight Quotes", "Tracking", "Routes", "Warehouses", "Invoices", "Payments", "Analytics", "Messages", "Settings"],
  warehouse_partner: ["Overview", "Inbound", "Inventory", "Storage", "Pick & Pack", "Outbound", "Returns", "Clients", "Billing", "Analytics", "Settings"],
  super_admin: ["Overview", "Users", "Workspaces", "Brands", "Manufacturers", "Suppliers", "Products", "RFQs", "Samples", "Orders", "Production", "Shipments", "Warehouses", "Sales Channels", "Payments", "Payouts", "Subscriptions", "Commissions", "Disputes", "KYC Verification", "AI Usage", "Reports", "Platform Settings"],
};
