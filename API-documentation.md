## 🧾 **API Documentation: Developer Admin Platform**

---

### 🌐 Base URL

```
http://localhost:4000
```

---

## 📁 Admin API

### 🔐 Admin Login

`POST /api/admin/login`

**Payload:**

```json
{
  "email": "admin@example.com",
  "password": "your_admin_password"
}
```

**Success Response:**

```json
{
  "message": "Login successful",
  "token": "JWT-TOKEN-HERE"
}
```

---

## 👤 User Activities

### 🔄 Create an Activity Log

`POST /admin/activities`

**Payload:**

```json
{
  "user": "userId",
  "activityType": "course_started",
  "course": "courseId",
  "details": { "section": "Introduction" },
  "tokenReward": 10
}
```

---

### 📄 Get All Logs

`GET /admin/activities`

---

### 🔍 Get One Log

`GET /admin/activities/:id`

---

### ✏️ Update Activity Log

`PUT /admin/activities/:id`

**Payload (example):**

```json
{
  "tokenReward": 50
}
```

---

### ❌ Delete Log

`DELETE /admin/activities/:id`

---

## 💬 Comments API

### ➕ Create Comment

`POST /api/comments`

**Payload:**

```json
{
  "thread": "threadId",
  "user": "userId",
  "content": "This is a comment",
  "web3Interactions": {
    "txHash": "0x123abc",
    "walletAddress": "0xABCDEF..."
  }
}
```

---

### 📄 Get All Comments

`GET /api/comments`

---

### 🔍 Get One Comment

`GET /api/comments/:id`

---

### ✏️ Update Comment

`PUT /api/comments/:id`

**Payload:**

```json
{
  "content": "Updated comment content"
}
```

---

### ❌ Delete Comment

`DELETE /api/comments/:id`

---

## 🧵 Discussion Threads API

### ➕ Create Thread

`POST /api/discussion-threads`

**Payload:**

```json
{
  "course": "courseId",
  "user": "userId",
  "title": "My thread title",
  "content": "Initial content",
  "web3Interactions": {
    "txHash": "0x456def",
    "walletAddress": "0xFEDCBA..."
  }
}
```

---

### 📄 Get All Threads

`GET /api/discussion-threads`

---

### 🔍 Get One Thread

`GET /api/discussion-threads/:id`

---

### ✏️ Update Thread

`PUT /api/discussion-threads/:id`

**Payload:**

```json
{
  "title": "Updated Title",
  "content": "Updated content"
}
```

---

### ❌ Delete Thread

`DELETE /api/discussion-threads/:id`

---

## 🪪 NFT Certifications

### ➕ Create NFT Certification

`POST /api/nft-certifications`

**Payload:**

```json
{
  "user": "userId",
  "course": "courseId",
  "certificateHash": "Qm123...",
  "walletAddress": "0xABC123..."
}
```

---

### 📄 Get All NFT Certifications

`GET /api/nft-certifications`

---

### 🔍 Get One Certification

`GET /api/nft-certifications/:id`

---

### ✏️ Update Certification

`PUT /api/nft-certifications/:id`

**Payload (example):**

```json
{
  "certificateHash": "QmNewHash..."
}
```

---

### ❌ Delete Certification

`DELETE /api/nft-certifications/:id`

---

## 🧪 Testing in Postman

### 🪪 Setup

1. Add Bearer token for protected routes (admin login returns it).
2. Set `Content-Type: application/json` in headers.
3. For each request, use correct payload format.
4. You can also add tests and environments in Postman for smoother flow.

---

## 📌 Final Notes

- All IDs (`userId`, `courseId`, `threadId`) should be valid ObjectIds from your database.
- Secure sensitive routes using middleware (e.g., `adminAuth.js`).
- For production, ensure rate-limiting, input validation, logging, and HTTPS are configured.

Would you like a downloadable Postman Collection file for this entire API?
