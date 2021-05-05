import React from 'react';
import { Container, Background } from './style';
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
wrapperCol: { offset: 8, span: 16 },
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
            rules={[{ required: true, message: 'Preencha com um e-mail válido' }]}
            >
                <div className="aaaaaaaaaaaaa">

            <Input placeholder="Digite seu email" />
                </div>
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