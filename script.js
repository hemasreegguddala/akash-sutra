// Akasha Sutra - Offline Emergency Communication Prototype

const devices = [
    {
        id: "A",
        name: "Device A",
        status: "Connected"
    },
    {
        id: "B",
        name: "Device B",
        status: "Connected"
    },
    {
        id: "C",
        name: "Device C",
        status: "Connected"
    },
    {
        id: "D",
        name: "Device D",
        status: "Connected"
    }
];

function discoverDevices() {
    const deviceList = document.getElementById("deviceList");

    if (!deviceList) return;

    deviceList.innerHTML = "";

    devices.forEach(device => {
        const deviceBox = document.createElement("div");

        deviceBox.className = "device";

        deviceBox.innerHTML = `
            <strong>${device.name}</strong>
            <span>🟢 ${device.status}</span>
        `;

        deviceList.appendChild(deviceBox);
    });
}

function sendSOS() {
    const result = document.getElementById("result");

    if (!result) return;

    result.innerHTML = `
        <div class="success">
            <strong>🚨 Emergency Message Delivered</strong>
            <p style="margin-top: 8px;">
                Message: Emergency, I need help.
            </p>

            <div class="route">
                Device A → Device B → Device C
            </div>

            <p style="margin-top: 12px;">
                Message successfully routed through nearby devices.
            </p>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    discoverDevices();

    const sosButton = document.getElementById("sendSOS");

    if (sosButton) {
        sosButton.addEventListener("click", sendSOS);
    }
});