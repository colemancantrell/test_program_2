document.addEventListener("DOMContentLoaded", function () {
  const saveBtn = document.getElementById("saveBtn");

  saveBtn.addEventListener("click", function () {
    // If you want to capture the entire page, use document.body
    // If you only want the table sections, wrap them in a container and use that
    const captureArea = document.getElementById("captureArea") || document.body;

    // Use html2canvas to capture that element
    html2canvas(captureArea, { scale: 2 }).then((canvas) => {
      // Convert canvas to data URL in JPEG format
      const imageData = canvas.toDataURL("image/jpeg", 1.0);

      // Create a link element and download the image
      const link = document.createElement("a");
      link.download = "Workplace_Program.jpg";
      link.href = imageData;
      link.click();
    });
  });
});