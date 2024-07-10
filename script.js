const deleteBtn = document.querySelector(".delete-btn");

document.querySelector(".file-input").addEventListener("change", (e) => {
  const file = e.target.files[0];

  if (file) {
    document.getElementById(
      "file-name"
    ).textContent = `Selected file: ${file.name}`;
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageEle = document.getElementById("image-preview");
      imageEle.src = e.target.result;
      imageEle.style.display = "block";
      deleteBtn.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
});

document.querySelector(".delete-btn").addEventListener("click", () => {
  const fileInput = document.querySelector(".file-input");
  fileInput.value = "";

  const imageEle = document.getElementById("image-preview");
  imageEle.src = "";
  imageEle.style.display = "none";

  document.getElementById("file-name").textContent = "";

  deleteBtn.style.display = "none";
});
