# Project Management System - Database Schema

## User Collection

Stores information about registered users.

| Field | Data Type | Description |
|---------|----------|-------------|
| _id | ObjectId | Unique user ID |
| name | String | User Name |
| email | String | Email Address |
| password | String | Encrypted Password |
| role | String | Admin / Project Manager / Team Member |
| createdAt | Date | Account creation date |
| updatedAt | Date | Last updated date |

---

## Project Collection

Stores project details.

| Field | Data Type | Description |
|---------|----------|-------------|
| _id | ObjectId | Project ID |
| title | String | Project Title |
| description | String | Project Description |
| manager | ObjectId | Assigned Project Manager |
| members | Array(ObjectId) | Team Members |
| deadline | Date | Project Deadline |
| priority | String | Low / Medium / High |
| status | String | Pending / Ongoing / Completed |
| createdBy | ObjectId | Admin who created project |
| createdAt | Date | Created Date |

---

## Task Collection

Stores all task details.

| Field | Data Type | Description |
|---------|----------|-------------|
| _id | ObjectId | Task ID |
| title | String | Task Title |
| description | String | Task Description |
| project | ObjectId | Related Project |
| assignedTo | ObjectId | Assigned User |
| createdBy | ObjectId | Task Creator |
| priority | String | Low / Medium / High |
| status | String | Pending / In Progress / Completed |
| progress | Number | Progress Percentage |
| dueDate | Date | Due Date |
| createdAt | Date | Created Date |

---

## Comment Collection

Stores comments on tasks.

| Field | Data Type | Description |
|---------|----------|-------------|
| _id | ObjectId | Comment ID |
| task | ObjectId | Related Task |
| user | ObjectId | Commented By |
| comment | String | Comment |
| createdAt | Date | Comment Date |

---

## File Collection

Stores uploaded files.

| Field | Data Type | Description |
|---------|----------|-------------|
| _id | ObjectId | File ID |
| task | ObjectId | Related Task |
| uploadedBy | ObjectId | Uploaded User |
| fileName | String | File Name |
| filePath | String | File Location |
| uploadedAt | Date | Upload Time |

---

## Activity Collection

Stores system activity logs.

| Field | Data Type | Description |
|---------|----------|-------------|
| _id | ObjectId | Activity ID |
| user | ObjectId | User |
| action | String | Activity Description |
| createdAt | Date | Activity Time |