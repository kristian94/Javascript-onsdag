$(document).ready(function () {
    var body = $("body");

    var Person = function (name, age, isMale, occupation) {
        this.name = name;
        this.age = age;
        this.isMale = isMale;
        this.occupation = occupation;
        this.gender = function () {
            if (isMale == true)
                return "male";
            else
                return "female";
        };
    };

    var h1 = function () {
        $(this).css("font-style", "italic");
        $(this).css("font-weight", "bold");
    };

    var h2 = function () {
        $(this).css("font-style", "normal");
        $(this).css("font-weight", "normal");
    };

    var p1 = new Person("John", 25, true, "Fisherman");
    var p2 = new Person("Jill", 17, false, "High School Student");
    var p3 = new Person("Gerold", 42, true, "Carpenter");
    var p4 = new Person("Annabelle", 36, false, "CEO");

    var persons = [p1, p2, p3, p4];

    var table = document.createElement("table");

    for (var i = 0, max = 4; i < max; i++) {
        (function () {
            var tr = document.createElement("tr");

            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");

            $(td1).text(persons[i].name);
            $(td2).text(persons[i].age);
            $(td3).text(persons[i].gender());
            $(td4).text(persons[i].occupation);

            $(td1).hover(h1, h2);
            $(td2).hover(h1, h2);
            $(td3).hover(h1, h2);
            $(td4).hover(h1, h2);
            
            $(tr).append(td1);
            $(tr).append(td2);
            $(tr).append(td3);
            $(tr).append(td4);

            $(table).append(tr);
        })(i);

    }










    body.append(table);

    console.log(body.length);
});
