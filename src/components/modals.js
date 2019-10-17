import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Modal, ModalManager, Effect } from "react-dynamic-modal";

export class modals extends Component {
  render() {
    const {
      subject,
      agenda,
      companyName,
      meeting_date,
      post_date,
      meeting_no,
      announce,
      meeting_time,
      meeting_place,
      honorific,
      authorized_name,
      authorized_position,
      onRequestClose
    } = this.props;

    return (
      <Modal

        onRequestClose={onRequestClose}
        effect={Effect.ScaleUp}
      >
          <div className="linepostnews">
            <h6>ตัวอย่างการลงประกาศ</h6>
          </div>
          <h6 className="postnews">{companyName}</h6>
          <br />
          <p className="post_date">วันที่ {post_date}</p>
          <p className="subject">
            เรื่อง {subject} ครั้งที่ {meeting_no}
          </p>
          <br />
          <p className="autposition">เรียน {announce}</p>
          <p>
            ด้วยคณะกรรมการของบริษัทมีมติให้เรียกประชุมสามัญผู้ถือหุ้น ครั้งที่
            {meeting_no} ในวันที่ {meeting_date} เวลา {meeting_time} น. ณ
            {meeting_place}
            เพื่อพิจารณาเรื่องต่างๆ ตามระเบียบวาระดังต่อไปนี้
          </p>
          {agenda}
          <p>
            ดังนั้น จึงขอเรียนเชิญท่านผู้ถือหุ้นไปประชุมตามวัน เวลา
            และสถานที่ดังกล่าวข้างต้นโดยพร้อมเพรียงกันด้วย จักขอบพระคุณยิ่ง
          </p>
          <p className="text-post">ขอแสดงความนับถือ</p>
          <br /> <br />
          <div className="text-postll">
            {"("}
            {honorific}
            {authorized_name}
            {")"}
            <br />
            <div className="text-ll">{authorized_position}</div>
          </div>
          <br />
          <br />
          <Button onClick={ModalManager.close}>Close</Button>
      </Modal>
    );
  }
}

export default modals;
