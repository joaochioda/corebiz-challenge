import React from 'react';
import { Container, Background } from './style';
import { Form, Input, Button } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const placeValidator = (_, value) => {
    if (value === '' || !validateEmail(value)) {
        return Promise.reject('Preencha com um e-mail válido');
    }
    return Promise.resolve();
};

export const Newsletter = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    return (
    <Background>
        <Container>
        <span>Participe de nossas news com promoções e novidades!</span>
        <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
        >
        <Form.Item
            name="name"
            rules={[{ required: true, message: 'Preencha com seu nome completo' }]}
            >
            <Input  placeholder="Digite seu nome" />
        </Form.Item>

        <Form.Item
            name="email"
            rules={[{ validator: placeValidator }]}
            >
            <Input placeholder="Digite seu email" />
        </Form.Item>
            <div className="button">
            <Button type="primary" htmlType="submit">
                Eu quero!
            </Button>
            </div>
            
        </Form>
        </Container>
    </Background>
)}