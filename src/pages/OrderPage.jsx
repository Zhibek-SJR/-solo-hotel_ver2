import React, { useContext, useEffect, useState } from 'react';
import * as yup from 'yup'
import { Formik } from 'formik';
import { Form, Button, Modal } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom'
import ReactCardFlip from 'react-card-flip';
import { userContext } from '../contexts/UserContext';



const OrderPage = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const schema = yup.object({
        number: yup
            .number()
            .min(1000000000000000, "Минимальное количество символов 16")
            .max(9999999999999999, "Максимальное количество символов 16")
            .required("Данное поле обязательно для заполнения"),
        month: yup
            .string()
            .required("Данное поле обязательно для заполнения"),
        name: yup
            .string()
            .min(6, "Минимальное количество символов 6")
            .max(150, "Максимальное количество символов 150")
            .required("Данное поле обязательно для заполнения"),
        cvv: yup
            .number()
            .min(100, "Минимальное количество символов 3")
            .max(999, "Максимальное количество символов 3")
            .required("Данное поле обязательно для заполнения"),
    })
    


    const schema2 = yup.object({
        fullname: yup
            .string()
            .min(6, "Минимальное количество символов 6")
            .max(60, "Максимальное количество символов 60")
            .required("Данное поле обязательно для заполнения"),
        data: yup.string()
            .min(6, "Минимальное количество символов 6")
            .max(150, "Максимальное количество символов 150")
            .required("Данное поле обязательно для заполнения"),
    })

    const { cart, getCart, updateBadgeLenght } = useContext(userContext)
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate("/cart/order")
    }
    const [isFlipped, setIsFlipped] = useState(false)
    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }
    useEffect(() => {
        getCart()
    }, [])
    
    return (
        <div className='container order-page'>
            <ReactCardFlip isFlipped={isFlipped} flipDirection='vertical'>

                <div style={{ margin: '0 auto', width: '50%', }}>
                    <h2 style={{ width: '50%', textAlign: 'center', color: '#000', margin: '0 auto' }}>Забронировать номер</h2>
                    <Formik
                        validationSchema={schema2}
                        onSubmit={handleSubmit}
                        initialValues={{
                            fullname: "",
                            data: "",
                            time: "",
                        }}
                    >
                        {({ handleSubmit, handleChange, values, touched, errors }) => (
                            <Form style={{ alignItems: 'center', width: '100%' }} onSubmit={handleSubmit}

                            >
                                <Form.Group className="mb-3" controlId="formBasicEmail12">
                                    <Form.Label>Введите Ваше имя и фамилию</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Введите Ваше имя и фамилию"
                                        name="fullname"
                                        onChange={handleChange}
                                        isValid={!errors.fullname && touched.fullname}
                                        isInvalid={!!errors.fullname}
                                        value={values.fullname}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.fullname}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail22">
                                    <Form.Label>Дата</Form.Label>
                                    <Form.Control
                                        type="date"
                                        placeholder="Введите дату"
                                        name="data"
                                        onChange={handleChange}
                                        isValid={!errors.data && touched.data}
                                        isInvalid={!!errors.data}
                                        value={values.data}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.data}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail32">
                                    <Form.Label>Ваши контакты</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ваши контакты"
                                        name="time"
                                        onChange={handleChange}
                                        isValid={!errors.time && touched.time}
                                        isInvalid={!!errors.time}
                                        value={values.time}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.time}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button variant="primary" onClick={handleClick} type="submit">
                                    Подтвердить
                                </Button>
                            </Form>
                        )}

                    </Formik>
                </div>


                <div style={{ width: '50%', margin: '0 auto' }}>
                    <h2 style={{ width: '50%', textAlign: 'center', color: '#000', margin: '0 auto' }}>Форма оплаты</h2>
                    <Formik
                        validationSchema={schema}
                        onSubmit={handleSubmit}
                        initialValues={{
                            number: "",
                            month: "",
                            name: "",
                            cvv: "",
                        }}
                    >
                        {({ handleSubmit, handleChange, values, touched, errors }) => (
                            <Form style={{ alignItems: 'center', width: '100%' }} onSubmit={handleSubmit}

                            >
                                <Form.Group className="mb-3" controlId="formBasicEmail1">
                                    <Form.Label>Номер вашей карты</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Введите номер карты"
                                        name="number"
                                        onChange={handleChange}
                                        isValid={!errors.number && touched.number}
                                        isInvalid={!!errors.number}
                                        value={values.number}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.number}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail2">
                                    <Form.Label>Месяц и год</Form.Label>
                                    <Form.Control
                                        type="month"
                                        placeholder="Введите месяц и год"
                                        name="month"
                                        onChange={handleChange}
                                        isValid={!errors.month && touched.month}
                                        isInvalid={!!errors.month}
                                        value={values.month}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.month}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail3">
                                    <Form.Label>Ваше Имя</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Введите Имя"
                                        name="name"
                                        onChange={handleChange}
                                        isValid={!errors.name && touched.name}
                                        isInvalid={!!errors.name}
                                        value={values.name}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword4">
                                    <Form.Label>Введите CVV код</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Введите CVV код"
                                        name="cvv"
                                        onChange={handleChange}
                                        isValid={!errors.cvv && touched.cvv}
                                        isInvalid={!!errors.cvv}
                                        value={values.cvv}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.cvv}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <p >
                                    Общая сумма: {
                                        cart ? cart.totalPrice : 0
                                    }
                                </p>
                                <Button variant="primary" type="submit" onClick={() => {
                                    handleShow()
                                }}>
                                    Оплатить
                                </Button>
                            </Form>
                        )}

                    </Formik>
                </div>

            </ReactCardFlip >
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Успешно оплачено!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Благодарим за ваш выбор!</Modal.Body>
                <Modal.Footer>
                    <Link to='/'><Button variant="primary" onClick={() => {
                        handleClose()
                        localStorage.removeItem('cart');
                        updateBadgeLenght()
                        
                    }}>
                        Вернуться в главное меню
                    </Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </div >
    );
};

export default OrderPage;