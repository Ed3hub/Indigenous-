# NFT Certification API

## Overview

This API manages blockchain-backed NFT course completion certificates for an online school. It allows:

- Issuing NFT certificates for students who complete a course.
- Retrieving a student's NFT certificates.
- Finding all students who completed a specific course.
- Fetching NFT transactions related to a certificate.

## Technologies Used

- **Node.js** (Backend)
- **Express.js** (API Framework)
- **MongoDB** (Database)
- **Mongoose** (ODM for MongoDB)
- **Web3.js / Ethers.js** (Optional: Blockchain Integration)

## Installation

### 1️⃣ Clone Repository

```sh
git clone https://github.com/Ed3hub/Indigenous-.git
cd https://github.com/Ed3hub/Indigenous-.git
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file and add your database and blockchain settings:

```env
MONGO_URI=mongodb://localhost:27017/nft_certificates
PORT=5000
```

### 4️⃣ Start the Server

```sh
npm start
```

## API Endpoints

### 1️⃣ Issue an NFT Certificate

- **Endpoint:** `POST /api/nft/certificate/issue`
- **Description:** Issue and store an NFT certificate for a student who completes a course.
- **Request Body:**

```json
{
  "studentId": "65a9df57f1e98b2c24a30d12",
  "courseId": "65a9e345f3b54d2a8c7bde10",
  "ipfsMetadataURI": "https://ipfs.io/ipfs/Qm...NFTImage.jpg",
  "blockchain": "Ethereum",
  "transactionHash": "0xabc123xyz"
}
```

- **Response:**

```json
{
  "message": "NFT Certificate Issued Successfully!",
  "certificate": { ... }
}
```

---

### 2️⃣ Get All NFT Certificates of a Student

- **Endpoint:** `GET /api/nft/student/:studentId/certificates`
- **Description:** Fetch all NFT certificates issued to a student.
- **Response:**

```json
[
  {
    "_id": "65b0f7880d5e1c27e1a5dca8",
    "course": "Blockchain Fundamentals",
    "issuedAt": "2025-03-08T12:00:00.000Z",
    "metadata": { ... }
  }
]
```

---

### 3️⃣ Get All Students Who Completed a Specific Course

- **Endpoint:** `GET /api/nft/course/:courseId/completed-students`
- **Description:** Retrieve a list of students who have completed a specific course.
- **Response:**

```json
[
  { "studentId": "65a9df57f1e98b2c24a30d12", "name": "John Doe" },
  { "studentId": "65a9df57f1e98b2c24a30d13", "name": "Jane Smith" }
]
```

---

### 4️⃣ Get NFT Transactions of a Certificate

- **Endpoint:** `GET /api/nft/certificate/:certificateId/transactions`
- **Description:** Fetch all blockchain transactions related to a specific NFT certificate.
- **Response:**

```json
[{ "transactionHash": "0xabc123xyz", "timestamp": "2025-03-08T12:30:00.000Z" }]
```

## Database Schema

### Student Schema

```javascript
{
  _id: ObjectId,
  name: String,
  email: String
}
```

### Course Schema

```javascript
{
  _id: ObjectId,
  title: String,
  description: String
}
```

### NFT Certificate Schema

```javascript
{
  _id: ObjectId,
  student: ObjectId,
  course: ObjectId,
  issuedAt: Date,
  blockchain: String,
  transactionHash: String,
  metadata: {
    image: String,
    certificateHash: String,
    ipfsMetadataURI: String
  }
}
```

### Transaction Schema

```javascript
{
  _id: ObjectId,
  certificate: ObjectId,
  transactionHash: String,
  timestamp: Date
}
```

## Future Enhancements

- ✅ Smart contract integration for on-chain verification.
- ✅ Admin dashboard for certificate management.
- ✅ QR code verification for certificates.

## Contributing

Feel free to open issues and pull requests!

## License

MIT License
