
let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function () {

        this.students.forEach(function (student) {
            console.log(this);

            console.log(this.title + ": " + student

            );

        });

    }

};

group.showList();