const mongoose = require("mongoose");
const userdetail = require("./module/User");
const payment = require("./module/Payment");
const product1 = require("./module/Product")
const course_detail = require("./module/Course")
const URL = "mongodb+srv://jathu123:jathu123@assign.hwoanlc.mongodb.net/?retryWrites=true&w=majority&appName=Assign"

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected to the database")
    })
    .catch((error) => {
        console.log("connection Failed", error)
    });


    const userdet = async () => {
        try {
            console.log(await userdetail.find({}));
        } catch (error) {
            console.log(error);
        }
     }
    userdet();
    
// //user details added

// const user =[

//     {UserId: "uki2000",Name: "Jathusan",Age: 23,Course: "Full-stack-web-Developper",Email: "Jathusansujan@gmail.com",District: "Vavuniya"},
//     {UserId: "uki2000",Name: "Vithusan",Age: 23,Course: "Full-stack-web-Developper",Email: "vithushanvithu@gmail.com",District: "Vavuniya"},
//     {UserId: "uki2000",Name: "mathusan",Age: 23,Course: "Full-stack-web-Developper",Email: "mathusanmathu@gmail.com",District: "Vavuniya"},
//     {UserId: "uki2000",Name: "lathusan",Age: 23,Course: "Full-stack-web-Developper",Email: "lathusanlathu@gmail.com",District: "Vavuniya"},
//     {UserId: "uki2000",Name: "Thathusan",Age: 23,Course: "Full-stack-web-Developper",Email: "thathusanthathu@gmail.com",District: "Vavuniya"},
//     {UserId: "uki2000",Name: "kethusan",Age: 23,Course: "Full-stack-web-Developper",Email: "kethusankethu@gmail.com",District: "Vavuniya"},
//     {UserId: "uki2000",Name: "pathusan",Age: 23,Course: "Full-stack-web-Developper",Email: "pathusanpathu@gmail.com",District: "Vavuniya"},
//     {UserId: "uki2001",Name: "Thuvaraga",Age: 23,Course: "Full-stack-web",Email: "thuganta@gmail.com",District: "Vavuniya"},
//     {UserId: "uki2002",Name: "vimal",Age: 23,Course: "Full-stack",Email: "thuvta@gmail.com",District: "Vavuniya"},
//     {UserId: "uki2003",Name: "keerthikan",Age: 23,Course: "Full",Email: "thuvaail.com",District: "Vavuniya"}

// ];

userdetail.create(user)
    .then(() => {
        console.log("user saved ");
    })
    .catch((error) => {
        console.log("Error user not saved", error)
    });

// // //course detail added

// const course = [
//    { CourseId: "cid011",CourseName: "java",CourseFee: 50000,CourseDuration: "3 months"},
//    { CourseId: "cid012",CourseName: "java",CourseFee: 50000,CourseDuration: "3 months"},
//    { CourseId: "cid013",CourseName: "java",CourseFee: 50000,CourseDuration: "3 months"},
//    { CourseId: "cid014",CourseName: "java",CourseFee: 50000,CourseDuration: "3 months"},
//    { CourseId: "cid015",CourseName: "java",CourseFee: 50000,CourseDuration: "3 months"},
//    { CourseId: "cid016",CourseName: "java",CourseFee: 50000,CourseDuration: "3 months"},
//    { CourseId: "cid017",CourseName: "java-script",CourseFee: 50000,CourseDuration: "3 months"},
//    { CourseId: "cid018",CourseName: "python",CourseFee: 50000,CourseDuration: "3 months"},
//    { CourseId: "cid019",CourseName: "Html",CourseFee: 50000,CourseDuration: "3 months"},
//    { CourseId: "cid020",CourseName: "CSS",CourseFee: 50000,CourseDuration: "3 months"},
// ];

// course_detail.create(course)
//     .then(() => {
//         console.log("Course details saved");
//     })
//     .catch((error) => {
//         console.log("Not Save your course details", error);
//     });

// //product details

// const product_details = [
//     {ProductID: "proID001",ProductName: "mouse ",ProductCat: "electronic",ProductPrice: 2000,ProductQuantity: "1"},
//     {ProductID: "proID002",ProductName: " keyboard",ProductCat: "electronic",ProductPrice: 2000,ProductQuantity: "1"},
//     {ProductID: "proID003",ProductName: " cpu",ProductCat: "electronic",ProductPrice: 2000,ProductQuantity: "1"},
//     {ProductID: "proID004",ProductName: " Ram",ProductCat: "electronic",ProductPrice: 2000,ProductQuantity: "1"},
//     {ProductID: "proID005",ProductName: " harddisk",ProductCat: "electronic",ProductPrice: 2000,ProductQuantity: "1"},
//     {ProductID: "proID006",ProductName: " SSD",ProductCat: "electronic",ProductPrice: 2000,ProductQuantity: "1"},
//     {ProductID: "proID007",ProductName: " Charger",ProductCat: "electronic",ProductPrice: 2000,ProductQuantity: "1"},
//     {ProductID: "proID008",ProductName: " Powerbank",ProductCat: "electronic",ProductPrice: 2000,ProductQuantity: "1"},
//     {ProductID: "proID009",ProductName: " laptop",ProductCat: "electronic",ProductPrice: 2000,ProductQuantity: "1"},
//     {ProductID: "proID010",ProductName: " Table",ProductCat: "Woods product",ProductPrice: 2000,ProductQuantity: "1"}

// ];
// product1.create(product_details)
//     .then(() => {
//         console.log("product details saved")
//     })
//     .catch((error) => {
//         console.log("product details Not saved", error)
//     });

// // payment details

// const paid = [
//     {PaymentID: "PID01 ",PaymentMethod: " cash on delivery ",Fee: 1000},
//     {PaymentID: "PID02 ",PaymentMethod: " credit card",Fee: 2000},
//     {PaymentID: "PID03 ",PaymentMethod: " paid full amount",Fee: 3000},
//     {PaymentID: "PID04 ",PaymentMethod: " installment ",Fee: 4000},
//     {PaymentID: "PID05 ",PaymentMethod: " cash on delivery",Fee: 5000},
//     {PaymentID: "PID06 ",PaymentMethod: " credit card",Fee: 6000},
//     {PaymentID: "PID07 ",PaymentMethod: " cash on delivery",Fee: 7000},
//     {PaymentID: "PID08 ",PaymentMethod: " cash on delivery",Fee: 8000},
//     {PaymentID: "PID09 ",PaymentMethod: " cash on delivery",Fee: 9000},
//     {PaymentID: "PID10 ",PaymentMethod: " cash on delivery",Fee: 5000},
   

// ];
// payment.create(paid)
//     .then(() => {
//         console.log("payment detail saved ");
//     })
//     .catch((error) => {
//         console.log("Error payment not saved", error)
//     });

