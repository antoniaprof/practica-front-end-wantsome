//se compara valorile salariului fiecarui user
//se sorteaza userii: cel cu salariul cel mai mic primul,
//cel cu salriul cel mai mare, ultimul

(function () {
    var user = [
        { name: "John", salary: 20000 },
        { name: "Danny", salary: 30500 },
        { name: "Bekker", salary: 15000 }
    ];

    console.log(user.sort(function (a, b) {
        return a['salary'] - b['salary'];
    }))
})();

