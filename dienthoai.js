var Moblie = function (battery, composeMemory, inboxMemory, sentMemory, status) {
    this.battery = battery; //pin
    this.composeMemory = composeMemory;//Soạn bộ nhớ
    this.inboxMemory = inboxMemory;//Bộ nhớ hộp thư đến
    this.sentMemory = sentMemory;//Bộ nhớ gửi
    this.status = status;//trạng thái
    this.isOn = function () {
        return this.status ? true : false;//pin
    }
    this.turnOn = function () {
        if (!this.isOn()) {
            if (this.battery > 0 && this.battery <= 0) {
                this.battery--;
                this.status = true;
            }
        }
    }
    this.turnOff = function () {
        if (this.isOn()) {
            if (this.battery > 0 && this.battery <= 0) {
                this.battery--;
                this.status = false;
            }
        }
    }
    this.chargeBattery = function () {
        if (this.battery < 100) {
            this.battery++;
        }
    }
    this.composeMessage = function (message){//Soạn tin nhắn
        if (this.isOn()){
            this.battery--;
            this.composeMemory = message;
        }
    }
    this.sendMessage = function (toMobile){//gửi tin nhắn
        if (this.isOn()){
            this.battery--;
            this.sentMemory = this.composeMemory;
            toMobile.inboxMemory = this.composeMemory;
        }
    }
    this.receiveMessage = function (){//Nhận tin nhắn
        if (this.isOn()){
            this.battery--;
            return "You're have "
        }
    }
    this.readMessage = function (){//đọc tin nhắn
        if (this.isOn()){
            this.battery--;
            return this.inboxMemory;
        }
    }
}
function main(){
    let nokia = new Moblie(80,'','','',true);
    let iphone = new Moblie(80,'','','',true);
    let composingMessage = prompt('Nhập tin nhắn');
    nokia.composeMessage(composingMessage);
    nokia.sendMessage(iphone);
    let isCheck = iphone.receiveMessage();
    if (isCheck !=''){
        alert('Tin nhắn là: ' + iphone.readMessage());
    }
}
main();

