var choiceGeneral=new Vue({
    el: '#choiceGeneral',
    data: {
        options: [
            { text: ' Физ мат', value: 'А' },
            { text: 'Биология и химия', value: 'Б' },
            { text: 'Экономический', value: 'В' }
        ]
    }
})
var choice=new Vue({
    el: '#choice',
    data: {
        options: [
            { text: ' Программирование', value: 'А' },
            { text: 'Физика', value: 'Б' },
            { text: 'Математика', value: 'В' }
        ]
    }
})
