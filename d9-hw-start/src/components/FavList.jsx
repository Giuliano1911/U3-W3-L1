import { Button, Col, Container, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFavAction } from '../redux/actions'

function FavList() {
  const dispatch = useDispatch()
  const favArray = useSelector((reduxState) => {
    return reduxState.favourites.favourites
  })
  return (
    <Container>
      <Row>
        {favArray.map((comp, i) => {
          return (
            <Col xs={10} key={i}>
              <Link to={`/${comp}`}>{comp}</Link>
              <Button
                className="ms-4"
                variant="danger"
                onClick={() => {
                  dispatch(removeFavAction(i))
                }}
              >
                Delete
              </Button>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default FavList
