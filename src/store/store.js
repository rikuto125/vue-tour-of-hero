export default {
    state: {
        heroes: [
            { "id": 11, "name": "Mr. Nice" },
            { "id": 12, "name": "Narco" },
            { "id": 13, "name": "Bombasto" },
            { "id": 14, "name": "Celeritas" },
            { "id": 15, "name": "Magneta" },
            { "id": 16, "name": "RubberMan" },
            { "id": 17, "name": "Dynama" },
            { "id": 18, "name": "Dr IQ" },
            { "id": 19, "name": "Magma" },
            { "id": 20, "name": "Tornado" }
        ],
        messages: []
    },
    getHeroes: function () {
        this.state.messages.push('HeroService: fetched heroes')
        return this.state.heroes
    },
    clear: function () {
        this.state.messages = []
        return this.state.messages
    },
    getHero: function (id) {
        this.state.messages.push(`HeroService: fetched hero id=${id}`)
        return this.state.heroes
            .find((hero) => hero.id === id)
    },
    save: function (hero) {
        this.state.messages.push(`updated hero id=${hero.id}`)
        this.state.heroes.forEach(item =>
            item.name = item.id === hero.id ? hero.name : item.name)
    },
    addHero: function (name) {
        const maxId = this.genId(this.state.heroes)
        this.state.messages.push(`added hero w/ id=${maxId}`)
        this.state.heroes.push({ id: maxId, name: name })
    },
    genId: function (heroes) {
        return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11
    },
    delete: function (hero) {
        this.state.heroes =
            this.state.heroes.filter(item => item.id !== hero.id)
        return this.state.heroes
    },
    search: function (name) {
        if (name === '') { return }
        return this.state.heroes.filter(h => h.name.indexOf(name) !== -1)
    }
}