let db = [];
const fetchData = () => {
    return new Promise((resolve, reject) => {
        resolve(['Vienna', 'California'])
    })
}
const initializeCityDataBase = async () => {
    db = await fetchData();
    console.log(db)
}
const clearCityDatabase = () => {
    db = []
}

const isCity = city => {
    return db.indexOf(city) > -1 ? true : false
}

beforeEach(() => {
    initializeCityDataBase();
})

afterEach(() => {
    clearCityDatabase();
})


test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
})

describe('test scope', () => {
    beforeEach(() => {
        console.log('only called before inner test is made')
    })
    afterEach(() => {
        console.log('only called after inner test is made')
    })
    test('city database has San Juan', () => {
        expect(isCity('San Juan')).toBeTruthy();
    })
})