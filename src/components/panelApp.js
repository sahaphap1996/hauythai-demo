import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default function panelApp() {
  return (
    <div className="panel-app">
      {panel_app01()}
      {panel_app02()}
      {panel_app03()}
      {panel_app04()}
    </div>
  );
}

function panel_app01() {
  return (
    <div className="panel-01">
      <Row>
        <Col>
          <Button variant="danger" className="w-100">
            เลือกเลข
          </Button>
        </Col>
        <Col>
          <Button variant="secondary" className="w-100">
            ล้างค่า
          </Button>
        </Col>
      </Row>
      <Row className="row-2">
        <Col>
          <Button variant="outline-success" className="w-100 active">
            3 ตัว
          </Button>
        </Col>
        <Col>
          <Button variant="outline-success" className="w-100">
            2 ตัว
          </Button>
        </Col>
        <Col>
          <Button variant="outline-success" className="w-100">
            เลขวิ่ง
          </Button>
        </Col>
      </Row>
    </div>
  );
}

function panel_app02() {
  return (
    <div className="panel-02">
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <Button variant="light" id="button-addon1">
              3 ตัวบน
            </Button>
            <FormControl
              aria-label="Example text with button addon readOnly"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <Button variant="light" id="button-addon1">
              โต๊ด
            </Button>
            <FormControl
              aria-label="Example text with button addon readOnly"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
}

function panel_app03() {
  return (
    <div className="panel-03">
      <div className="t-name">เลือกหมวดเลข</div>
      <div className="p-group">{btn_group(10, 1)}</div>
    </div>
  );
}

function panel_app04() {
  return (
    <div className="panel-04">
      <div className="t-name">เลือกเลข</div>
      <div className="p-number">{btn_number(2,3)}</div>
    </div>
  );
}

function btn_group(num, next) {
  const btn_num = [];
  let a = '';
  for (let i = 0; i < num; i += next) {
    a = (i==0)?"active":"";
    btn_num.push(
      <Button variant="outline-danger" className={a} id={"btn-g-" + i} >
        {i}00
      </Button>
    );
  }
  return btn_num;
}

function btn_number(num,typex) {
  const btn_num = [];
  for (let i = 0; i < 100; i++) {
    let btb_str = i.toString().length < 2 ? "0" + i : i;
    btn_num.push(<Button variant="outline-success">{num}{btb_str}</Button>);
  }
  return btn_num;
}
