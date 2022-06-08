import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

const ListProducts = () => {
    const products = [
        {
            id: 1,
            nombre: "Old Skool",
            precio: 25000
        },
        {
            id: 2,
            nombre: "Clasic",
            precio: 32000
        },
        {
            id: 3,
            nombre: "sk8",
            precio: 35000
        },
    ]

    return (
        <>
        {products.map((el) => {
            return (
                <Card>
                  <CardImg
                    src="https://picsum.photos/318/180">
                  </CardImg>
                  <CardBody>
                    <CardTitle tag="h5">
                      {el.nombre}
                    </CardTitle>
                    <CardSubtitle
                      tag="h6">
                      ${el.precio}
                    </CardSubtitle>
                    <CardText>
                      This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </CardText>
                    <Button
                    color="success">
                      Button
                    </Button>
                  </CardBody>
                </Card>
            )
        })}

        </>
    )
}

export default ListProducts