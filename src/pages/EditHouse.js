import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { useEffect, useState } from "react";
import "./EditHouse.css";

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

const EditHouse = ({ supabase }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [casa, setCasa] = useState({
    nome: "Teste",
    descricao: "",
    morada: "",
    tipo: null,
    preco: null,
  });

  useEffect(() => {
    const getCasaById = async () => {
      const { data } = await supabase.from("casas").select().eq("id", id);
      if (data && data.length > 0) {
        setCasa(data[0]);
      }
    };

    // Pré-popular o form com os dados
    if (id) {
      getCasaById();
    }
  }, []);

  const insertCasa = async () => {
    await supabase.from("casas").insert(casa);
    navigate("/");
  };

  const deleteCasa = async () => {
    await supabase.from("casas").delete().eq("id", id);
    navigate("/");
  };

  const updateCasa = async () => {
    await supabase.from("casas").update(casa).eq("id", id);
    navigate("/");
  };

  return (
    <>
      <Form {...formItemLayout} style={{ width: "80%" }}>
        <Form.Item label="Nome">
          <Input
            placeholder="Nome"
            value={casa.nome}
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
            value={casa.descricao}
            onChange={(e) => {
              setCasa({ ...casa, descricao: e.target.value });
            }}
          />
        </Form.Item>

        <Form.Item label="Morada">
          <Input
            placeholder="Morada"
            value={casa.morada}
            onChange={(e) => {
              setCasa({ ...casa, morada: e.target.value });
            }}
          />
        </Form.Item>

        <Form.Item label="Tipo" hasFeedback>
          <Select
            placeholder="Tipo"
            allowClear
            value={casa.tipo}
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
            value={casa.preco}
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

        {!id && (
          <Button
            type="primary"
            style={{ fontSize: 30, height: "auto", padding: 24 }}
            onClick={() => {
              console.log(casa);
              insertCasa();
            }}
          >
            Guardar
          </Button>
        )}

        {id && (
          <Button
            type="primary"
            style={{ fontSize: 30, height: "auto", padding: 24 }}
            onClick={() => {
              updateCasa();
            }}
          >
            Atualizar
          </Button>
        )}

        {id && (
          <Button
            type="primary"
            danger
            style={{ fontSize: 30, height: "auto", padding: 24 }}
            onClick={() => {
              deleteCasa();
            }}
          >
            Apagar
          </Button>
        )}
      </div>
    </>
  );
};

export default EditHouse;
