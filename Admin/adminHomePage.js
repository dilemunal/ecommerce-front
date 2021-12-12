function allowDrop(ev) {
    ev.preventDefault();
  }
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

function CreateNot() {
  document.getElementById("createNot").submit();
  }

function adminAccCre() {
    document.getElementById("adminacc").submit();
    }

function formnameCategory() {
        document.getElementById("formnamecat").submit();
    }

function createCampaign() {
        document.getElementById("campaign").submit();
    }

function addProduct() {
        document.getElementById("formaddpro").submit();
    }