import React from "react";
import { Col, Row, Slider } from "antd";

import StatusIcon from "../StatusIcon";
import { MarksMembraneAlphaSyn, MarksATPNoName } from "../../utils/utils";

const EffectsBoxAlphaSyn = ({ status, className, value, onChange }) => {
  return (
    <div
      className={`effects-box with-slider alpha-syn ${className}`}
      id="alphaSyn"
    >
      <div className="name">α-Synuclein</div>
      <span className="status">{status}</span>
      <Row gutter={16}>
        <Col span={16}>
          <Slider
            range
            min={-1}
            max={1}
            tooltipVisible={false}
            value={[value]}
            included={true}
            onChange={onChange}
            marks={MarksATPNoName}
          />
        </Col>
        <Col span={8}>
          <span className="slider-label">
            {!status && MarksMembraneAlphaSyn[value]}
          </span>
        </Col>
      </Row>
      <StatusIcon type={className} />
    </div>
  );
};

export default EffectsBoxAlphaSyn;
