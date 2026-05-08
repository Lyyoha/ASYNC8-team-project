export function successToast(message = "Ваше замовлення успішно відправлено!") {
  iziToast.success({
    title: "Success!",
    message,
    position: "topRight",
    timeout: 3000,
    progressBar: true,
    close: true,
  });
}

export function errorToast(message = "Сталася помилка. Спробуйте ще раз.") {
  iziToast.error({
    title: "Error!",
    message,
    position: "topRight",
    timeout: 3000,
    progressBar: true,
    close: true,
  });
}
