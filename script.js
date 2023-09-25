const noteInput = document.getElementById("note");
const saveButton = document.getElementById("save");
const notesList = document.getElementById("notes-list");

saveButton.addEventListener("click", function () {
  const noteText = noteInput.value.trim();
  if (noteText !== "") {
    // Buat elemen <a> untuk mengunduh catatan
    const downloadLink = document.createElement("a");
    downloadLink.href = "data:text/plain;charset=utf-8," + encodeURIComponent(noteText);
    downloadLink.download = "my_note.txt"; // Nama file yang akan diunduh

    // Simpan catatan ke dalam file teks dan klik tombol unduh
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // Tambahkan catatan ke daftar catatan
    const noteElement = document.createElement("div");
    noteElement.classList.add("note");
    noteElement.textContent = noteText;
    notesList.appendChild(noteElement);

    // Kosongkan input catatan
    noteInput.value = "";
  }
});
