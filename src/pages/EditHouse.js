import { Link } from "react-router-dom";
import { Button, Form, Input, InputNumber, Select } from "antd";
import "./EditHouse.css";
import { useState } from "react";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const EditHouse = () => {
  const [casa, setCasa] = useState({
    nome: "Teste",
    descricao: "",
    morada: "",
    tipo: null,
    preco: null,
  });

  return (
    <>
      <Form {...formItemLayout} style={{ width: "80%" }}>
        <Form.Item label="Nome">
          <Input
            placeholder="Nome"
            defaultValue={casa.nome}
            onChange={(e) => {
              setCasa({ ...casa, nome: e.target.value });
            }}
          />
        </Form.Item>

        <Form.Item label="Descrição">
          <Input.TextArea
            allowClear
            showCount
            placeholder="Descrição"
            defaultValue={casa.descricao}
            onChange={(e) => {
              setCasa({ ...casa, descricao: e.target.value });
            }}
          />
        </Form.Item>

        <Form.Item label="Morada">
          <Input
            placeholder="Morada"
            defaultValue={casa.morada}
            onChange={(e) => {
              setCasa({ ...casa, morada: e.target.value });
            }}
          />
        </Form.Item>

        <Form.Item label="Tipo" hasFeedback>
          <Select
            placeholder="Tipo"
            allowClear
            defaultValue={casa.tipo}
            onChange={(value) => {
              setCasa({ ...casa, tipo: value });
            }}
          >
            <Option value="arrendar">Arrendar</Option>
            <Option value="vender">Vender</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Preço">
          <InputNumber
            style={{ width: "100%" }}
            addonAfter="€"
            defaultValue={casa.preco}
            onChange={(e) => {
              setCasa({ ...casa, preco: e });
            }}
          />
        </Form.Item>
      </Form>

      <div style={{ display: "flex", gap: 24 }}>
        <Button
          type="primary"
          style={{ fontSize: 30, height: "auto", padding: 24 }}
        >
          <Link to="/">Voltar atrás</Link>
        </Button>

        <Button
          type="primary"
          style={{ fontSize: 30, height: "auto", padding: 24 }}
          onClick={() => console.log(casa)}
        >
          Guardar
        </Button>
      </div>
    </>
  );
};

export default EditHouse;
