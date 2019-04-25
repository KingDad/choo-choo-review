import Train from '../../../app/javascript/react/components/Train.js'
import fetchMock from 'fetch-mock'


describe('train component', () => {
  let wrapper;

  beforeEach(() => {
    let train = {id: 1, name: "Bat Train", description: "NaNaNaNaNa Bat Train", founding_year: "2020-03-27"}

    fetchMock.get('/api/v1/trains/1', {
      status: 200,
      body: train
    })
    wrapper = mount(
      <Train/>
    )
  })

  afterEach(fetchMock.restore)

  describe('details for a specific train', () => {
    it('render name of the train', (done) => {
      setTimeout(() =>{})
      expect(wrapper.find('h1').text()).toEqual(train.name)
      done()
    }, 0)
  })
})
