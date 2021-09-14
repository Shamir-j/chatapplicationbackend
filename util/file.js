const path = require('path');
const fs = require('fs');

const clearImage = filePath => {
  filePath = path.join(__dirname, '..', filePath);
  fs.unlink(filePath, err => console.log(err));
};

exports.clearImage = clearImage;



// permission_modules
// permission
// roles
// previilages

// CREATE TABLE `permission` (
//   `id` int(11) NOT NULL AUTO_INCREMENT,
//   `module_id` int(11) NOT NULL,
//   `name` varchar(100) NOT NULL,
//   `prefix` varchar(100) NOT NULL,
//   `show_view` tinyint(1) DEFAULT '1',
//   `show_add` tinyint(1) DEFAULT '1',
//   `show_edit` tinyint(1) DEFAULT '1',
//   `show_delete` tinyint(1) DEFAULT '1',
//   `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8;


// CREATE TABLE `roles` (
//   `id` int(11) NOT NULL AUTO_INCREMENT,
//   `name` varchar(50) NOT NULL,
//   `prefix` varchar(50) DEFAULT NULL,
//   `is_system` varchar(10) NOT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

// INSERT INTO `roles` (`id`, `name`, `prefix`, `is_system`) VALUES (1, 'Super Admin', 'superadmin', '1');
// INSERT INTO `roles` (`id`, `name`, `prefix`, `is_system`) VALUES (2, 'Admin', 'admin', '1');
// INSERT INTO `roles` (`id`, `name`, `prefix`, `is_system`) VALUES (3, 'Teacher', 'teacher', '1');
// INSERT INTO `roles` (`id`, `name`, `prefix`, `is_system`) VALUES (4, 'Accountant', 'accountant', '1');
// INSERT INTO `roles` (`id`, `name`, `prefix`, `is_system`) VALUES (5, 'Librarian', 'librarian', '1');
// INSERT INTO `roles` (`id`, `name`, `prefix`, `is_system`) VALUES (6, 'Parent', 'parent', '1');
// INSERT INTO `roles` (`id`, `name`, `prefix`, `is_system`) VALUES (7, 'Student', 'student', '1');

// CREATE TABLE `staff_privileges` (
//   `id` int(11) NOT NULL AUTO_INCREMENT,
//   `role_id` int(11) NOT NULL,
//   `permission_id` int(11) NOT NULL,
//   `is_add` tinyint(1) NOT NULL,
//   `is_edit` tinyint(1) NOT NULL,
//   `is_view` tinyint(1) NOT NULL,
//   `is_delete` tinyint(1) NOT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=534 DEFAULT CHARSET=utf8;




// CREATE TABLE `permission_modules` (
//   `id` int(11) NOT NULL AUTO_INCREMENT,
//   `name` varchar(50) NOT NULL,
//   `prefix` varchar(50) NOT NULL,
//   `system` tinyint(1) NOT NULL,
//   `sorted` tinyint(10) NOT NULL,
//   `created_at` datetime NOT NULL,
//   PRIMARY KEY (`id`),
//   KEY `id` (`id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

// INSERT INTO `permission_modules` (`id`, `name`, `prefix`, `system`, `sorted`, `created_at`) VALUES (1, 'Dashboard', 'dashboard', 1, 1, '2019-05-27 04:23:00');
// INSERT INTO `permission_modules` (`id`, `name`, `prefix`, `system`, `sorted`, `created_at`) VALUES (2, 'Student', 'student', 1, 1, '2019-05-27 04:23:00');
// INSERT INTO `permission_modules` (`id`, `name`, `prefix`, `system`, `sorted`, `created_at`) VALUES (3, 'Parents', 'parents', 1, 2, '2019-05-27 04:23:00');
// INSERT INTO `permission_modules` (`id`, `name`, `prefix`, `system`, `sorted`, `created_at`) VALUES (4, 'Employee', 'employee', 1, 3, '2019-05-27 04:23:00');
// INSERT INTO `permission_modules` (`id`, `name`, `prefix`, `system`, `sorted`, `created_at`) VALUES (5, 'Human Resource', 'human_resource', 1, 4, '2019-05-27 04:23:00');
// INSERT INTO `permission_modules` (`id`, `name`, `prefix`, `system`, `sorted`, `created_at`) VALUES (6, 'Academic', 'academic', 1, 5, '2019-05-27 04:23:00');
// INSERT INTO `permission_modules` (`id`, `name`, `prefix`, `system`, `sorted`, `created_at`) VALUES (7, 'Homework', 'homework', 1, 7, '2019-05-27 04:23:00');
// INSERT INTO `permission_modules` (`id`, `name`, `prefix`, `system`, `sorted`, `created_at`) VALUES (8, 'Attachments Book', 'attachments_book', 1, 8, '2019-05-27 04:23:00');
// INSERT INTO `permission_modules` (`id`, `name`, `prefix`, `system`, `sorted`, `created_at`) VALUES (9, 'Exam Master', 'exam_master', 1, 9, '2019-05-27 04:23:00');
// INSERT INTO `permission_modules` (`id`, `name`, `prefix`, `system`, `sorted`, `created_at`) VALUES (10, 'Hostel', 'hostel', 1, 10, '2019-05-27 04:23:00');
// INSERT INTO `permission_modules` (`id`, `name`, `prefix`, `system`, `sorted`, `created_at`) VALUES (11, 'Transport', 'transport', 1, 11, '2019-05-27 04:23:00');
// INSERT INTO `permission_modules` (`id`, `name`, `prefix`, `system`, `sorted`, `created_at`) VALUES (12, 'Attendance', 'attendance', 1, 12, '2019-05-27 04:23:00');
// INSERT INTO `permission_modules` (`id`, `name`, `prefix`, `system`, `sorted`, `created_at`) VALUES (13, 'Library', 'library', 1, 13, '2019-05-27 04:23:00');
// INSERT INTO `permission_modules` (`id`, `name`, `prefix`, `system`, `sorted`, `created_at`) VALUES (14, 'Events', 'events', 1, 14, '2019-05-27 04:23:00');
// INSERT INTO `permission_modules` (`id`, `name`, `prefix`, `system`, `sorted`, `created_at`) VALUES (15, 'Bulk Sms And Email', 'bulk_sms_and_email', 1, 15, '2019-05-27 04:23:00');
// INSERT INTO `permission_modules` (`id`, `name`, `prefix`, `system`, `sorted`, `created_at`) VALUES (16, 'Student Accounting', 'student_accounting', 1, 16, '2019-05-27 04:23:00');
// INSERT INTO `permission_modules` (`id`, `name`, `prefix`, `system`, `sorted`, `created_at`) VALUES (17, 'Office Accounting', 'office_accounting', 1, 17, '2019-05-27 04:23:00');
// INSERT INTO `permission_modules` (`id`, `name`, `prefix`, `system`, `sorted`, `created_at`) VALUES (18, 'Settings', 'settings', 1, 18, '2019-05-27 04:23:00');
// INSERT INTO `permission_modules` (`id`, `name`, `prefix`, `system`, `sorted`, `created_at`) VALUES (19, 'Live Class', 'live_class', 1, 6, '2019-05-27 04:23:00');



















// const PDFGenerator = require('pdfkit')
// const fs = require('fs')

// class InvoiceGenerator {
//     constructor(receipt) {
//         this.receipt = receipt
//     }

//     generateHeaders(doc) {
//         const billingAddress = this.receipt.addresses.billing

//         doc
//             .image('./door-company-logo.jpg', 0, 0, { width: 250 })
//             .fillColor('#000')
//             .fontSize(20)
//             .text('INVOICE', 275, 50, { align: 'right' })
//             .fontSize(10)
//             .text(`Invoice Number: ${this.receipt.invoiceNumber}`, { align: 'right' })
//             .text(`Due: ${this.receipt.dueDate}`, { align: 'right' })
//             .text(`Balance Due: $${this.receipt.subtotal - this.receipt.paid}`, { align: 'right' })
//             .moveDown()
//             .text(`Billing Address:\n ${billingAddress.name}\n${billingAddress.address}\n${billingAddress.city}\n${billingAddress.state},${billingAddress.country}, ${billingAddress.postalCode}`, { align: 'right' })

//         const beginningOfPage = 50
//         const endOfPage = 550

//         doc.moveTo(beginningOfPage, 200)
//             .lineTo(endOfPage, 200)
//             .stroke()

//         doc.text(`Memo: ${this.receipt.memo || 'N/A'}`, 50, 210)

//         doc.moveTo(beginningOfPage, 250)
//             .lineTo(endOfPage, 250)
//             .stroke()

//     }

//     generateTable(doc) {
//         const tableTop = 270
//         const itemCodeX = 50
//         const descriptionX = 100
//         const quantityX = 250
//         const priceX = 300
//         const amountX = 350

//         doc
//             .fontSize(10)
//             .text('Item Code', itemCodeX, tableTop, { bold: true })
//             .text('Description', descriptionX, tableTop)
//             .text('Quantity', quantityX, tableTop)
//             .text('Price', priceX, tableTop)
//             .text('Amount', amountX, tableTop)

//         const items = this.receipt.items
//         let i = 0


//         for (i = 0; i < items.length; i++) {
//             const item = items[i]
//             const y = tableTop + 25 + (i * 25)

//             doc
//                 .fontSize(10)
//                 .text(item.itemCode, itemCodeX, y)
//                 .text(item.description, descriptionX, y)
//                 .text(item.quantity, quantityX, y)
//                 .text(`$ ${item.price}`, priceX, y)
//                 .text(`$ ${item.amount}`, amountX, y)
//         }
//     }

//     generateFooter(doc) {
//         doc
//             .fontSize(10)
//             .text(`Payment due upon receipt. `, 50, 700, {
//                 align: 'center'
//             })
//     }

//     generate() {
//         let theOutput = new PDFGenerator

//         console.log(this.receipt)

//         const fileName = `Invoice ${this.receipt.invoiceNumber}.pdf`

//         // pipe to a writable stream which would save the result into the same directory
//         theOutput.pipe(fs.createWriteStream(fileName))

//         this.generateHeaders(theOutput)

//         theOutput.moveDown()

//         this.generateTable(theOutput)

//         this.generateFooter(theOutput)


//         // write out file
//         theOutput.end()

//     }
// }

// module.exports = InvoiceGenerator