# 🛡️ Post Moderation Dashboard

A clean, responsive, and intuitive moderation dashboard built with **React**, **Redux Toolkit**, and **Tailwind CSS**. This app enables moderators to approve, reject, or review user-generated posts with features like:

- 🔍 Modal-based content preview
- ✅ Batch approve/reject with selection
- ❌ Confirmation dialogs
- 🔁 Undo support via toast notifications
- ⌨️ Keyboard shortcuts (A, R, Space, Esc)
- 📱 Fully responsive and mobile-friendly

---

## 📦 Prerequisites and Dependencies

### ✅ Prerequisites

Make sure you have the following installed:

- **Node.js** (v16 or above recommended)
- **npm** or **yarn**
- Git (to clone the repository)

### 📚 Key Dependencies

| Package           | Purpose                            |
|-------------------|------------------------------------|
| React             | Core UI library                    |
| Redux Toolkit     | State management                   |
| React-Redux       | Connect Redux with React           |
| Tailwind CSS      | Utility-first CSS framework        |
| React-Toastify    | Toast notifications                |

---

## ⚙️ Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/SaudagarSahil/Post-Moderation-Queue-Interface.git
```

2. **Install Dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open the app in your browser**
```arduino
http://localhost:5173
```

✨ Features
Pagination with adjustable items per page

Status-based post filtering: Pending, Approved, Rejected

Content preview with modal navigation

Batch approve/reject with selection

Confirmation dialog before rejecting

Toasts with undo action for accidental moderation

Keyboard Shortcuts:

A: Approve selected/focused post

R: Reject selected/focused post

Space: Open content preview

Esc: Deselect/close modal

Responsive layout for desktop and mobile

