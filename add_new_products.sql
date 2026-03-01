-- SQL Script to add new products and variations (Tirzepatide, Ghkcu, Lemon Bottle, Aqualyx)
-- INSTRUCTIONS:
-- 1. Review and update the "base_price" and "price" fields with your actual pricing.
-- 2. Run this script in your Supabase SQL Editor.

DO $$
DECLARE
  pid UUID;
BEGIN

  -- ===========================================
  -- 1. TIRZEPATIDE (15mg, 30mg)
  -- ===========================================
  -- Note: If Tirzepatide already exists, you can just insert the variations using the existing product_id.
  -- This script creates a new Tirzepatide product entry.
  INSERT INTO products (name, description, category, base_price, purity_percentage, stock_quantity, available, featured)
  VALUES ('Tirzepatide', 'Dual GIP/GLP-1 receptor agonist for metabolic research.', 'research', 2000.00, 99.5, 0, true, true)
  RETURNING id INTO pid;
  
  INSERT INTO product_variations (product_id, name, quantity_mg, price, stock_quantity) VALUES
  (pid, '15mg', 15.0, 2000.00, 50),
  (pid, '30mg', 30.0, 2900.00, 50);

  -- ===========================================
  -- 2. GHK-CU (100mg)
  -- ===========================================
  INSERT INTO products (name, description, category, base_price, purity_percentage, stock_quantity, available, featured)
  VALUES ('GHK-CU', 'Copper peptide complex for tissue repair and anti-aging.', 'cosmetic', 1900.00, 99.0, 0, true, true)
  RETURNING id INTO pid;
  
  INSERT INTO product_variations (product_id, name, quantity_mg, price, stock_quantity) VALUES
  (pid, '100mg', 100.0, 1900.00, 50);

  -- ===========================================
  -- 3. GHK-CU TOPICAL (1g)
  -- ===========================================
  INSERT INTO products (name, description, category, base_price, purity_percentage, stock_quantity, available, featured)
  VALUES ('GHK-Cu Topical', 'Cosmetic grade topical copper peptide.', 'cosmetic', 1700.00, 99.0, 0, true, false)
  RETURNING id INTO pid;
  
  INSERT INTO product_variations (product_id, name, quantity_mg, price, stock_quantity) VALUES
  (pid, '1g', 1000.0, 1700.00, 50);

  -- ===========================================
  -- 4. LEMON BOTTLE KOREA (makesolutions.kr)
  -- ===========================================
  INSERT INTO products (name, description, category, base_price, purity_percentage, stock_quantity, available, featured)
  VALUES ('Lemon Bottle Korea (makesolutions.kr)', 'Premium fat dissolving solution from Korea.', 'cosmetic', 1900.00, 99.0, 0, true, false)
  RETURNING id INTO pid;
  
  INSERT INTO product_variations (product_id, name, quantity_mg, price, stock_quantity) VALUES
  (pid, '10ml / Bottle', 10.0, 1900.00, 50);

  -- ===========================================
  -- 5. AQUALYX
  -- ===========================================
  INSERT INTO products (name, description, category, base_price, purity_percentage, stock_quantity, available, featured)
  VALUES ('Aqualyx', 'Injectable fat dissolving treatment.', 'cosmetic', 2000.00, 99.0, 0, true, false)
  RETURNING id INTO pid;
  
  INSERT INTO product_variations (product_id, name, quantity_mg, price, stock_quantity) VALUES
  (pid, '8ml / Vial', 8.0, 2000.00, 50);

  -- Update availability correctly
  UPDATE products p
  SET available = EXISTS (
    SELECT 1 FROM product_variations pv 
    WHERE pv.product_id = p.id AND pv.stock_quantity > 0
  )
  WHERE EXISTS (SELECT 1 FROM product_variations pv2 WHERE pv2.product_id = p.id);

END $$;

RAISE NOTICE '✅ New products added successfully!';
