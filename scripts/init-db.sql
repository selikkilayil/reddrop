-- Create database
CREATE DATABASE blood_donors;

-- Connect to the database
\c blood_donors;

-- Create donors table
CREATE TABLE donors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE,
  phone VARCHAR(20) NOT NULL,
  blood_type VARCHAR(3) NOT NULL CHECK (blood_type IN ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')),
  age INTEGER CHECK (age >= 18 AND age <= 65),
  weight DECIMAL(5,2) CHECK (weight >= 45),
  last_donation DATE,
  address TEXT,
  emergency_contact VARCHAR(255),
  medical_conditions TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for better search performance
CREATE INDEX idx_donors_blood_type ON donors(blood_type);
CREATE INDEX idx_donors_name ON donors(name);
CREATE INDEX idx_donors_email ON donors(email);

-- Insert sample data
INSERT INTO donors (name, email, phone, blood_type, age, weight, last_donation, address, emergency_contact, medical_conditions) VALUES
('John Doe', 'john.doe@email.com', '+1234567890', 'O+', 28, 75.5, '2024-01-15', '123 Main St, City, State 12345', 'Jane Doe - +1234567891', NULL),
('Sarah Smith', 'sarah.smith@email.com', '+1234567892', 'A+', 32, 62.0, '2024-02-20', '456 Oak Ave, City, State 12345', 'Mike Smith - +1234567893', 'Mild hypertension'),
('Michael Johnson', NULL, '+1234567894', 'B-', NULL, NULL, NULL, NULL, NULL, NULL),
('Emily Davis', 'emily.davis@email.com', '+1234567896', 'AB+', 29, 58.7, '2024-03-10', '321 Elm St, City, State 12345', 'Tom Davis - +1234567897', NULL),
('David Wilson', NULL, '+1234567898', 'O-', 35, 72.3, '2024-01-05', NULL, 'Anna Wilson - +1234567899', 'Diabetes Type 1'),
('Jane Smith', NULL, '+1555123456', 'A-', NULL, NULL, NULL, NULL, NULL, NULL);