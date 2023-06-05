// function Agency() {

//     this.setagencyCode = function agencyCode() {
//         return this.agencyCode;
//     }
//     this.getagencyCode = function agencyCode() {
//         return this.agencyCode;
//     }
//     this.setagencyName = function agencyName() {
//         return this.agencyName;
//     }
//     this.getagencyName = function agencyName() {
//         return this.agencyName;
//     }
//     this.setphoneNumber = function phoneNumber() {
//         return this.phoneNumber;
//     }
//     this.getphoneNumber = function phoneNumber() {
//         let newNumber = this.phoneNumber.slice(-3);
//         let mainPhoneNumber = newNumber.concat("XXX");
//         return this.phoneNumber;
//     }
//     this.setaddress = function address() {
//         return this.address;
//     }
//     this.getaddress = function address() {
//         return this.address;
//     }
//     this.setemail = function email() {
//         return this.email;
//     }
//     this.getemail = function email() {
//         return this.email;
//     }
//     this.getInfo = function () {
//         let infoArr = [this.agencyCode, this.agencyName, this.phoneNumber, this.address, this.email]
//         return infoArr
//     }
// }
class Agency {
    constructor(agencyCode, agencyName, phoneNumber, address, email) {
        this.agencyCode = agencyCode;
        this.agencyName = agencyName;
        this.phoneNumber = phoneNumber;
        this.phoneNumber = function () {
            let newNumber = this.phoneNumber.slice(-3);
            let mainNumber = newNumber.concat("XXX");
            return mainNumber;
        }
        this.address = address;
        this.email = email;
        this.getInfo = function () {
            let infoArr = [this.agencyCode, this.agencyName, this.phoneNumber, this.address, this.email]
            return infoArr
        }
    }
}
let agency1 = new Agency("1", "Sophia", "01675489547", "New York", "Sophia@gmail.com");
let agency2 = new Agency("2", "Ana", "0351478965", "Bakking", "Ana@gmail.com");
let agency3 = new Agency("3", "Shoa", "0154789452", "Tokyo", "Shoa@gmail.com");
let agency4 = new Agency("4", "Amada", "0126147895", "Tokyo", "Amada@gmail.com");
let agencyList = [];
agencyList.push(agency1);
agencyList.push(agency2);
agencyList.push(agency3);
function createAgency(arr) {
    agencyList.push(arr);
    return agencyList;
}
createAgency(agency4);
function removeAgency(agencyList, agencyName) {
    agencyList = agencyList.filter(agency => agency.agencyName !== agencyName)
}
removeAgency(agencyList, "Ana");
function removeAgency(arr, i){
    arr =arr.splice(i,1);
}
removeAgency(agencyList,1)

