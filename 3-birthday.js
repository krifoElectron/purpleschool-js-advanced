const FORTEEN = 14;

function checkIfMore14(birthDate) {
    const now = new Date();
    const date = new Date(birthDate);

    let yearsDiff = now.getFullYear() - date.getFullYear();

    const nowDay = now.getDate();
    const nowMonth = now.getMonth();
    const birthDay = date.getDate();
    const birthMonth = date.getMonth();

    if (nowMonth < birthMonth || (nowMonth === birthMonth && nowDay < birthDay)) {
        yearsDiff--;
    }

    return yearsDiff >= FORTEEN;
}
