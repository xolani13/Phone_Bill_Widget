
const callCostSettingElement = document.querySelector(".callCostSetting");
const smsCostSettingElement = document.querySelector(".smsCostSetting");
const warningLevelSettingElement = document.querySelector(".warningLevelSetting");
const criticalLevelElement = document.querySelector(".criticalLevelSetting");
const addBtnsettings = document.querySelector(".addBtnsettings");
const updateBtnsettings = document.querySelector(".updateSettings");
const callTotalSettingsElement = document.querySelector(".callTotalSettings");
const smsTotalSettingsElement = document.querySelector(".smsTotalSettings");
const totalSettingsElement = document.querySelector(".totalSettings");


// If No values are entered in the settings, the object settings will be the default
var settings = {
    callCostSetting: 2.75,
    smsCostSetting: 0.75,
    warningLevelSetting: 30,
    criticalLevel: 50,
};
var callsTotal = 0;
var smsTotal = 0;

function updateSettings() {

    if (callCostSettingElement.value != "") {
        settings.callCostSetting = Number(callCostSettingElement.value);
    }
    if (smsCostSettingElement.value != "") {
        settings.smsCostSetting = Number(smsCostSettingElement.value);
    }
    if (warningLevelSettingElement.value != "") {
        settings.warningLevelSetting = Number(warningLevelSettingElement.value);
    }
    if (criticalLevelElement.value != "") {
        settings.criticalLevel = Number(criticalLevelElement.value);
    }

}

function settingsBillTotal() {
    var checkedRadioBtn = document.querySelector(".billItemTypeWithSettings:checked");

    if (checkedRadioBtn.value === "call") {
        callsTotal += settings.callCostSetting;
    } else if (checkedRadioBtn.value === "sms") {
        smsTotal += settings.smsCostSetting;
    }

    callTotalSettingsElement.innerHTML = callsTotal.toFixed(2);
    smsTotalSettingsElement.innerHTML = smsTotal.toFixed(2);
    var costTotal = callsTotal + smsTotal;
    totalSettingsElement.innerHTML = costTotal.toFixed(2);


    if (costTotal >= settings.criticalLevel) {
        totalSettingsElement.classList.add("danger");
    }

    else if (costTotal >= settings.warningLevelSetting) {
        totalSettingsElement.classList.add("warning");
    }
}

updateBtnsettings.addEventListener('click', updateSettings);
addBtnsettings.addEventListener('click', settingsBillTotal);