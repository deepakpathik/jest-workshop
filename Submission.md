# Jest Workshop Submission

## Student Details
- Name: Deepak Pathik
- Roll Number: 2024-B-31102005B
- GitHub Username: deepakpathik

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name: No coupon with auto discount
**What it protects against:**  
Ensures the 5% automatic discount for orders ≥1000 is not accidentally removed or changed.
---

### 2. Test Name: SAVE10 coupon applied
**What it protects against:**  
Prevents regression where the 10% coupon logic or max-discount calculation breaks.
---

### 3. Test Name: FLAT50 boundary case
**What it protects against:**  
Ensures totals never go negative when discount is larger than subtotal.
---

### 4. Test Name: Invalid subtotal throws
**What it protects against:**  
Stops invalid inputs (negative numbers, NaN, wrong types) from silently producing wrong billing.
---

### 5. Test Name: Case-insensitive coupon
**What it protects against:**  
Prevents bugs where users enter lowercase coupon codes and the system rejects valid coupons.
---

## CI Pipeline (if implemented)
- Did CI pass successfully? Yes
- GitHub Actions Run URL:
https://github.com/deepakpathik/jest-workshop/actions/workflows/node-ci.yml
---

## Reflection (1–2 lines)
What is **one thing** you understood better about testing or CI after this workshop?

I understood how automated tests protect business logic from breaking and how CI ensures code is validated on every push without manual checking.
