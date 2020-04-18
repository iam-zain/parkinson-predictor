import React, { Component } from "react";
import "./App.css";

// import ConnectElements from "./react-connect-elements";

import FirstColumn from "./components/firstcol";
import SecondCol from "./components/secondCol";
import C1 from "./components/Complex1";
import Predictor from "./components/Predictor";
import {
  INITIAL_STATE,
  HALF_RESET_STATE,
  FACTOR_WEIGHTAGE_MAP,
} from "./utils/utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
    };
  }

  onPink1Change = (value, skipReset) => {
    switch (value[0]) {
      case -2:
        this.setState(
          {
            pink1: value,
            isResetAllDisabled: false,
            atpSlider: [-2],
            atp: "Decreases by 60%",
            atpClass: "dec",
            oxygen: "Decreases by 60%",
            oxygenClass: "dec",
            membranePotential: "Decreases by 50%",
            membranePotentialClass: "dec",
            apoptosis: "Increases",
            apoptosisClass: "inc",
            mtIntegrity: "Decreases",
            mtIntegrityClass: "dec",
            rOS: "Increases",
            rOSClass: "inc",
            calcium: "Efflux decreases",
            calciumClass: "dec",
            alphaSyn: "Increases",
            alphaSynClass: "inc",
            fissionFusionClass: "alter",
            fissionFusion: "Altered",

            apopSlider: [1],
            oxygenSlider: [-1],
            alphaSynSlider: [1],
            calciumSlider: [1],
            memPotSlider: [-2],
            fissionFusionSlider: [1],
            rosSlider: [4],
            c1Slider: [-4],
          },
          this.computeParkinsonIndicator
        );
        // this.onParkinChange([-1], true);
        break;

      case -1:
        this.setState(
          {
            isResetAllDisabled: false,
            pink1: value,
            atp: "Decreases",
            atpClass: "dec",
            oxygen: "Decreases",
            oxygenClass: "dec",
            apoptosis: "Increases",
            apoptosisClass: "inc",
            mtIntegrity: "Decreases",
            mtIntegrityClass: "dec",
            rOS: "Increases by 180%",
            rOSClass: "inc",
            calcium: "Efflux decreases",
            calciumClass: "dec",
            membranePotential: "Decreases",
            membranePotentialClass: "dec",
            alphaSyn: "Increases",
            alphaSynClass: "inc",
            C1: "Decreases",
            c1Class: "dec",
            c1Slider: [-3],
            rosSlider: [4],
            atpSlider: [-1],
            apopSlider: [1],
            oxygenSlider: [-1],
            alphaSynSlider: [1],
            calciumSlider: [1],
            memPotSlider: [-1],
          },
          this.computeParkinsonIndicator
        );
        break;

      default:
        this.setState(
          { pink1: value, isResetAllDisabled: false },
          this.computeParkinsonIndicator
        );
        break;
    }
  };

  onDJ1Change = (value, skipReset) => {
    switch (value[0]) {
      case -2:
        this.setState(
          {
            isResetAllDisabled: false,
            dJ1: value,
            atp: "Decreases by 42%",
            atpClass: "dec",
            h2O2: "Increases by 100%",
            h2O2Class: "inc",
            apoptosis: "Increases",
            apoptosisClass: "inc",
            membranePotential: "Decreases by 44%",
            membranePotentialClass: "dec",
            calcium: "Increases",
            calciumClass: "inc",
            rOS: "Increases",
            rOSClass: "inc",
            atpSlider: [-1],
            apopSlider: [1],
            calciumSlider: [1],
            memPotSlider: [-1],
            rosSlider: [2],
            c1Slider: [-6],
            h2O2Slider: [1],
          },
          this.computeParkinsonIndicator
        );
        break;

      case -1:
        this.setState(
          {
            isResetAllDisabled: false,
            dJ1: value,
            atp: "Decreases",
            atpClass: "dec",
            h2O2: "Increases",
            h2O2Class: "inc",
            apoptosis: "Increases",
            apoptosisClass: "inc",
            membranePotential: "Decreases",
            membranePotentialClass: "dec",
            calcium: "Increases",
            calciumClass: "inc",
            rOS: "Increases",
            rOSClass: "inc",
            C1: "Decreases",
            c1Class: "dec",
            apopSlider: [1],
            calciumSlider: [1],
            memPotSlider: [-1],
            rosSlider: [4],
            c1Slider: [-3],
          },
          this.computeParkinsonIndicator
        );
        break;

      default:
        this.setState(
          { dJ1: value, isResetAllDisabled: false },
          this.computeParkinsonIndicator
        );
        break;
    }
  };

  onDopChange = (value, skipReset) => {
    this.setState({
      isResetAllDisabled: false,
    });

    switch (value[0]) {
      case -2:
        this.setState(
          {
            dopamine: value,
            calcium: "Increased permeability",
            calciumClass: "inc",
            h2O2: "Increases",
            h2O2Class: "inc",
            calciumSlider: [1],
            h2O2Slider: [1],
          },
          this.computeParkinsonIndicator
        );
        break;

      case -1:
        this.setState(
          {
            dopamine: value,
            alphaSyn: "Increases (If Dopamine is below 30%)",
            alphaSynClass: "inc",
            alphaSynSlider: [1],
          },
          this.computeParkinsonIndicator
        );
        break;

      case 1:
        this.setState(
          {
            dopamine: value,
            rOS: "Increases",
            rOSClass: "inc",
            rosSlider: [3],
          },
          this.computeParkinsonIndicator
        );
        break;

      default:
        this.setState({ dopamine: value }, this.computeParkinsonIndicator);
        break;
    }
  };

  onHtrA2Change = (value, skipReset) => {
    switch (value[0]) {
      case -2:
        this.setState(
          {
            htrA2: value,
            isResetAllDisabled: false,
            alphaSyn: "Decreases",
            alphaSynClass: "dec",
            rOS: "Increases",
            rOSClass: "inc",
            apoptosis: "Increases",
            apoptosisClass: "inc",
            dopaN: "Decreases",
            dopaNClass: "dec",
            up: "Increases",
            upClass: "inc",

            apopSlider: [1],
            alphaSynSlider: [1],
            rosSlider: [2],
            h2O2Slider: [1],
            uPSlider: [1],
            dopaNSlider: [-1],
          },
          this.computeParkinsonIndicator
        );
        break;

      case -1:
        this.setState(
          {
            htrA2: value,
            isResetAllDisabled: false,
            alphaSyn: "Decreases",
            alphaSynClass: "dec",
            rOS: "Increases",
            rOSClass: "inc",
            apoptosis: "Increases",
            apoptosisClass: "inc",
            dopaN: "Decreases",
            dopaNClass: "dec",
            up: "Increases",
            upClass: "inc",
            apopSlider: [1],
            alphaSynSlider: [1],
            rosSlider: [2],
            h2O2Slider: [1],
            uPSlider: [1],
            dopaNSlider: [-1],
          },
          this.computeParkinsonIndicator
        );
        break;

      default:
        this.setState(
          { htrA2: value, isResetAllDisabled: false },
          this.computeParkinsonIndicator
        );
        break;
    }
  };

  onParkinChange = (value, skipReset) => {
    switch (value[0]) {
      case -2:
        this.setState(
          {
            parkin: value,
            isResetAllDisabled: false,
            atp: "Decreases",
            atpClass: "dec",
            dopaN: "Decreases by 20%",
            dopaNClass: "dec",
            up: "Increases",
            upClass: "inc",
            fissionFusion: "Altered",
            fissionFusionClass: "alter",
            rOS: "Increases",
            rOSClass: "inc",
            membranePotential: "Decreases",
            membranePotentialClass: "dec",
            alphaSyn: "Increases",
            alphaSynClass: "inc",

            apopSlider: [1],
            atpSlider: [-1],
            memPotSlider: [-1],
            alphaSynSlider: [1],
            rosSlider: [3],
            uPSlider: [1],
            dopaNSlider: [-1],
            fissionFusionSlider: [1],
            c1Slider: [-5],
          },
          this.computeParkinsonIndicator
        );
        break;

      case -1:
        this.setState(
          {
            membranePotential: "Decreases",
            isResetAllDisabled: false,
            membranePotentialClass: "dec",
            atp: "Decreases",
            atpClass: "dec",
            alphaSyn: "Increases",
            alphaSynClass: "inc",
            fissionFusion: "Altered",
            fissionFusionClass: "alter",
            up: "Increases",
            upClass: "inc",
            rOS: "Increases",
            rOSClass: "inc",
            alphaSynSlider: [1],
            memPotSlider: [-1],
            atpSlider: [-1],
            rosSlider: [2],
            uPSlider: [1],
            fissionFusionSlider: [1],
            parkin: value,
          },
          this.computeParkinsonIndicator
        );
        break;

      default:
        this.setState(
          { parkin: value, isResetAllDisabled: false },
          this.computeParkinsonIndicator
        );
        break;
    }
  };

  onTrap1Change = (value, skipReset) => {
    switch (value[0]) {
      case -2:
        this.setState(
          {
            trap1: value,
            isResetAllDisabled: false,
            membranePotential: "Decreases by 45%",
            membranePotentialClass: "dec",
            alphaSyn: "Increases",
            alphaSynClass: "inc",
            rOS: "Increases",
            rOSClass: "inc",
            rosSlider: [4],
            alphaSynSlider: [1],
            memPotSlider: [-1],
          },
          this.computeParkinsonIndicator
        );
        break;
      case -1:
        this.setState(
          {
            isResetAllDisabled: false,
            trap1: value,
            rOS: "Increases by 100%",
            rOSClass: "inc",
            alphaSyn: "Increases",
            alphaSynClass: "inc",
            membranePotential: "Decreases",
            membranePotentialClass: "dec",
            rosSlider: [3],
            alphaSynSlider: [1],
            memPotSlider: [-1],
          },
          this.computeParkinsonIndicator
        );
        break;

      default:
        this.setState(
          { trap1: value, isResetAllDisabled: false },
          this.computeParkinsonIndicator
        );
        break;
    }
  };

  onUCHL1Change = (value, skipReset) => {
    switch (value[0]) {
      case -1:
        this.setState(
          {
            uchl1: value,
            isResetAllDisabled: false,
            alphaSyn: "Increases",
            alphaSynClass: "inc",
            dopaN: "Decreases",
            dopaNClass: "dec",
            up: "Increases",
            upClass: "inc",
            alphaSynSlider: [1],
            dopaNSlider: [-1],
            uPSlider: [1],
          },
          this.computeParkinsonIndicator
        );
        break;

      default:
        this.setState(
          { uchl1: value, isResetAllDisabled: false },
          this.computeParkinsonIndicator
        );
        break;
    }
  };

  onMPPChange = (value, skipReset) => {
    switch (value[0]) {
      case 1:
        this.setState(
          {
            mPP: value,
            isResetAllDisabled: false,
            atp: "Decreases (Impaired)",
            atpClass: "dec",
            atpSlider: [-1],
            rOS: "Increases by 40%",
            rOSClass: "inc",
            rosSlider: [4],
            membranePotential: "Decreases",
            membranePotentialClass: "dec",
            memPotSlider: [-1],
            calcium: "Increases (Intra-cellular)",
            calciumClass: "inc",
            calciumSlider: [1],
            h2O2: "Increases",
            h2O2Class: "inc",
            h2O2Slider: [1],
            dopaN: "Decreases by 25%",
            dopaNClass: "dec",
            dopaNSlider: [-1],
            apoptosis: "Increases by 60%",
            apoptosisClass: "inc",
            apopSlider: [1],
          },
          () => {
            this.onDopChange([1], true);
            this.computeParkinsonIndicator();
          }
        );
        break;

      default:
        this.setState({ mPP: value, isResetAllDisabled: false });
        break;
    }
  };

  onRosChange = (value, skipReset) => {
    !skipReset && this.resetAll();

    this.setState({
      isResetAllDisabled: false,
    });

    switch (value[0]) {
      case 0:
        this.resetAll();

        break;
      case 1:
        this.setState({
          mPP: [1],
          rosSlider: value,
          mppStatus: "Increases by 50%",
        });
        break;
      case 2:
        this.setState({
          mPP: [1],
          rosSlider: value,
          mppStatus: "Increases by 60%",
        });
        break;
      case 3:
        this.setState({
          mPP: [1],
          rosSlider: value,
          mppStatus: "Increases by 95%",
          trap1: [-1],
        });
        break;
      case 4:
        this.setState({
          mPP: [1],
          rosSlider: value,
          mppStatus: "Increases by 100%",
          trap1: [-1],
        });
        break;
      case 5:
        this.setState({
          mPP: [1],
          dJ1: [-1],
          pink1: [-1],
          uchl1: [-1],
          htrA2: [-1],
          trap1: [-1],
          parkin: [-1],
          dopamine: [1],
          rosSlider: value,

          up: "Increases",
          uPSlider: [1],
          atp: "Decreases",
          atpSlider: [-1],
          h2O2: "increases",
          h2O2Slider: [1],
          dopaN: "Decreases",
          dopaNSlider: [-1],
          oxygen: "Decreases",
          oxygenSlider: [-1],
          alphaSyn: "Increases",
          alphaSynSlider: [1],
          apoptosis: "Increases",
          apopSlider: [1],
          fissionFusion: "Alter",
          fissionFusionSlider: [1],
          mtIntegrity: "Decreases",
          calcium: "Decrease in efflux",
          calciumSlider: [1],
          membranePotential: "Decreases",
          memPotSlider: [-1],

          ptpSlider: [1],
          upClass: "inc",
          atpClass: "dec",

          h2O2Class: "inc",
          dopaNClass: "dec",
          oxygenClass: "dec",
          calciumClass: "dec",
          alphaSynClass: "inc",
          apoptosisClass: "inc",
          mtIntegrityClass: "dec",
          fissionFusionClass: "alter",
          membranePotentialClass: "dec",
          mppStatus: "Increases by 200%",
        });
        break;

      case 6:
        this.setState({
          mPP: [1],
          dJ1: [-1],
          pink1: [-1],
          htrA2: [-1],
          uchl1: [-1],
          trap1: [-1],
          parkin: [-1],
          dopamine: [1],
          rosSlider: value,

          up: "Increases",
          atp: "Decreases",
          h2O2: "increases",
          dopaN: "Decreases",
          oxygen: "Decreases",
          alphaSyn: "Increases",
          apoptosis: "Increases",
          fissionFusion: "Alter",
          mtIntegrity: "Decreases",
          calcium: "Decrease in efflux",
          membranePotential: "Decreases",

          upClass: "inc",
          atpClass: "dec",
          atpSlider: [-1],
          uPSlider: [1],
          h2O2Slider: [1],
          apopSlider: [1],
          dopaNSlider: [-1],
          oxygenSlider: [-1],
          alphaSynSlider: [1],
          calciumSlider: [1],
          memPotSlider: [-1],
          ptpSlider: [1],
          fissionFusionSlider: [1],

          h2O2Class: "inc",
          dopaNClass: "dec",
          oxygenClass: "dec",
          calciumClass: "dec",
          alphaSynClass: "inc",
          apoptosisClass: "inc",
          mtIntegrityClass: "dec",
          fissionFusionClass: "alter",
          membranePotentialClass: "dec",
          mppStatus: "Increases by 500%",
        });
        break;
      default:
        this.setState({ rosSlider: value });
        break;
    }
  };

  onMemPotChange = (value, skipReset) => {
    !skipReset && this.resetAll();

    this.setState({
      isResetAllDisabled: false,
    });

    switch (value[0]) {
      case -3:
        this.setState({
          memPotSlider: value,
          pink1: [-2],
          dJ1: [-2],
          trap1: [-2],
          parkin: [-1],
          mPP: [1],
          rOS: "Increases",
          rOSClass: "inc",
          parkinStatus: "Less Phosphorylation",
          atp: "Decreases (Impaired)",
          atpClass: "dec",
          atpSlider: [-2],
          uPSlider: [1],
          apopSlider: [1],
          dopaNSlider: [-1],
          oxygenSlider: [-1],
          alphaSynSlider: [1],
          calciumSlider: [1],
          ptpSlider: [1],
          rosSlider: [4],
          alphaSyn: "Increases",
          alphaSynClass: "inc",
          calcium: "Increases",
          calciumClass: "inc",
          dopaN: "Decreases",
          dopaNClass: "dec",
          up: "Increases",
          upClass: "inc",
          oxygen: "Decreases",
          oxygenClass: "dec",
          fissionFusion: "Altered",
          fissionFusionClass: "alter",
          apoptosis: "Increases",
          apoptosisClass: "inc",
        });
        break;
      case -2:
        this.setState({
          memPotSlider: value,
          pink1: [-2],
          parkin: [-1],
          dJ1: [-2],
          trap1: [-2],
          mPP: [1],
          rOS: "Increases",
          rOSClass: "inc",
          parkinStatus: "Less Phosphorylation",
          atp: "Decreases by 60%",
          atpClass: "dec",
          atpSlider: [-1],
          uPSlider: [1],
          ptpSlider: [1],
          rosSlider: [4],
          apopSlider: [1],
          dopaNSlider: [-1],
          calciumSlider: [1],
          oxygenSlider: [-1],
          alphaSynSlider: [1],

          alphaSyn: "Increases",
          alphaSynClass: "inc",
          calcium: "Increases",
          calciumClass: "inc",
          dopaN: "Decreases",
          dopaNClass: "dec",
          up: "Increases",
          upClass: "inc",
          oxygen: "Decreases by 60%",
          oxygenClass: "dec",
          fissionFusion: "Altered",
          fissionFusionClass: "alter",
          apoptosis: "Increases",
          apoptosisClass: "inc",
        });
        break;
      case -1:
        this.setState({
          memPotSlider: value,
          pink1: [-1],
          parkin: [-1],
          dJ1: [-2],
          trap1: [-2],
          rOS: "Increases",
          rOSClass: "inc",
          mPP: [1],
          parkinStatus: "Less Phosphorylation",
          atp: "Decreases by 42%",
          atpClass: "dec",
          atpSlider: [-1],
          uPSlider: [1],
          apopSlider: [1],
          dopaNSlider: [-1],
          oxygenSlider: [-1],
          alphaSynSlider: [1],
          calciumSlider: [1],
          rosSlider: [4],
          ptpSlider: [1],

          alphaSyn: "Increases",
          alphaSynClass: "inc",
          calcium: "Increases",
          calciumClass: "inc",
          dopaN: "Decreases",
          dopaNClass: "dec",
          up: "Increases",
          upClass: "inc",
          oxygen: "Decreases",
          oxygenClass: "dec",
          apoptosis: "Increases",
          apoptosisClass: "inc",
        });
        break;
      case 0:
        this.setState({
          memPotSlider: value,
        });
        break;
      case 1:
        this.setState({
          memPotSlider: value,
          rOS: "Increases",
          rOSClass: "inc",
          rosSlider: [4],

          //   Show parkinson disease
        });
        break;
      default:
        this.setState({ memPotSlider: value });
        break;
    }
  };

  onAtpSliderChange = (value, skipReset) => {
    !skipReset && this.resetAll();

    this.setState({
      isResetAllDisabled: false,
    });

    switch (value[0]) {
      case -2:
        this.setState({
          atpSlider: value,
          pink1: [-2],
          parkin: [-2],
          memPotSlider: [-2],
          dJ1: [-2],
          mPP: [1],
          htrA2: [-1],
          htrA2Status: "Less Phosphorylation",
          membranePotential: "Decreases by 50%",
          membranePotentialClass: "dec",
          oxygen: "Decreases by 60%",
          oxygenClass: "dec",
          rOS: "Increases",
          rOSClass: "inc",
          calcium: "Increases",
          calciumClass: "inc",
          h2O2: "Increases",
          h2O2Class: "inc",
          apoptosis: "Increases",
          apoptosisClass: "inc",
          dopaN: "Decreases",
          dopaNClass: "dec",
          up: "Increases",
          upClass: "inc",
          alphaSyn: "Increases",
          alphaSynClass: "inc",
          fissionFusion: "Altered",
          fissionFusionClass: "alter",
          uPSlider: [1],
          apopSlider: [1],
          dopaNSlider: [-1],
          oxygenSlider: [-1],
          alphaSynSlider: [1],
          calciumSlider: [1],
          rosSlider: [4],
          ptpSlider: [1],
        });
        break;

      case -1:
        this.setState({
          atpSlider: value,

          memPotSlider: [-1],
          pink1: [-1],
          parkin: [-1],
          dJ1: [-2],
          mPP: [1],
          htrA2: [-1],
          htrA2Status: "Less Phosphorylation",

          membranePotential: "Decreases by 44%",
          membranePotentialClass: "dec",
          oxygen: "Decreases",
          oxygenClass: "dec",
          rOS: "Increases",
          rOSClass: "inc",
          calcium: "Increases",
          calciumClass: "inc",
          h2O2: "Increases by 100%",
          h2O2Class: "inc",
          apoptosis: "Increases",
          apoptosisClass: "inc",
          dopaN: "Decreases",
          dopaNClass: "dec",
          up: "Increases",
          upClass: "inc",
          alphaSyn: "Increases",
          alphaSynClass: "inc",
          fissionFusion: "Altered",
          fissionFusionClass: "alter",
          uPSlider: [1],
          apopSlider: [1],
          dopaNSlider: [-1],
          oxygenSlider: [-1],
          alphaSynSlider: [1],
          calciumSlider: [1],
          rosSlider: [4],
          ptpSlider: [1],
        });
        break;

      default:
        this.setState({ atpSlider: value });
        break;
    }
  };

  onApopSliderChange = (value, skipReset) => {
    !skipReset && this.resetAll();

    this.setState({
      isResetAllDisabled: false,
    });

    switch (value[0]) {
      case 1:
        this.setState({
          apopSlider: value,
          pink1: [-2],
          dJ1: [-1],
          htrA2: [-1],
          parkin: [-1],
          uchl1: [-2],
          mPP: [1],
          atpSlider: [-1],
          atp: "Decreases",
          atpClass: "dec",

          calcium: "Increases",
          calciumClass: "inc",
          membranePotential: "Decreases",
          membranePotentialClass: "dec",
          oxygen: "Decreases",
          oxygenClass: "dec",
          rOS: "Increases",
          rOSClass: "inc",
          h2O2: "Increases",
          h2O2Class: "inc",
          dopaN: "Decreases",
          dopaNClass: "dec",
          up: "Increases",
          upClass: "inc",
          alphaSyn: "Increases",
          alphaSynClass: "inc",
          fissionFusion: "Altered",
          fissionFusionClass: "alter",
          ptpSlider: [1],
        });
        break;

      default:
        this.setState({ apopSlider: value });
        break;
    }
  };

  onAlphaSChange = (value, skipReset) => {
    !skipReset && this.resetAll();

    switch (value[0]) {
      case -1:
        this.setState({
          isResetAllDisabled: false,
          alphaSynSlider: value,
          dopamine: [-1],
          dopamineStatus: "Reduced release",
          mPP: [0],
          mppStatus: "Resistant",
        });
        break;

      case 1:
        this.setState({
          alphaSynSlider: value,
          pink1: [-1],
          parkin: [-1],
          trap1: [-1],
          htrA2: [-1],
          dopamine: [-1],
          dopamineStatus: "Reduced by 70%",
          calcium: "Increases",
          calciumClass: "inc",
          membranePotential: "Decreases",
          membranePotentialClass: "dec",
          oxygen: "Decreases",
          oxygenClass: "dec",
          rOS: "Increases",
          rOSClass: "inc",
          h2O2: "Increases",
          h2O2Class: "inc",
          dopaN: "Decreases",
          dopaNClass: "dec",
          up: "Increases",
          upClass: "inc",
          fissionFusion: "Altered",
          fissionFusionClass: "alter",
          isResetAllDisabled: false,

          uPSlider: [1],
          apopSlider: [1],
          dopaNSlider: [-1],
          oxygenSlider: [-1],
          calciumSlider: [1],
          rosSlider: [4],
          ptpSlider: [1],
          memPotSlider: [-2],
          h2O2Slider: [1],
          fissionFusionSlider: [1],
        });
        break;

      default:
        this.setState({ alphaSynSlider: value, isResetAllDisabled: false });
        break;
    }
  };

  onCalciumSliderChange = (value, skipReset) => {
    !skipReset && this.resetAll();

    switch (value[0]) {
      case 1:
        this.setState({
          calciumSlider: value,
          pink1: [-1],
          dJ1: [-1],
          mPP: [1],
          dopamine: [-2],
          alphaSynSlider: [1],
          atpSlider: [-1],

          membranePotential: "Decreases",
          membranePotentialClass: "dec",
          oxygen: "Decreases",
          oxygenClass: "dec",
          rOS: "Increases",
          rOSClass: "inc",
          h2O2: "Increases",
          h2O2Class: "inc",
          dopaN: "Decreases",
          dopaNClass: "dec",
          atp: "Decreases",
          atpClass: "dec",
          isResetAllDisabled: false,

          dopaNSlider: [-1],
          oxygenSlider: [-1],
          rosSlider: [4],
          memPotSlider: [-2],
          h2O2Slider: [1],
          ptpSlider: [1],
        });
        break;

      default:
        this.setState({ calciumSlider: value, isResetAllDisabled: false });
        break;
    }
  };

  onDopaNChange = (value, skipReset) => {
    !skipReset && this.resetAll();

    switch (value[0]) {
      case -1:
        this.setState({
          dopaNSlider: value,
          parkin: [-2],
          uchl1: [-2],
          htrA2: [-1],
          mPP: [1],
          memPotSlider: [-2],
          membranePotential: "Decreases",
          atp: "Decreases",
          atpClass: "dec",
          atpSlider: [-2],
          alphaSynClass: "inc",
          alphaSyn: "Increased Aggregation",
          alphaSynSlider: [1],
          rosSlider: [3],
          rOS: "Increases",
          rOSClass: "inc",
          upClass: "inc",
          up: "Increases",
          uPSlider: [1],
          fissionFusionClass: "alter",
          fissionFusion: "Altered",
          fissionFusionSlider: [1],
          calcium: "Increases",
          calciumClass: "inc",
          calciumSlider: [1],
          isResetAllDisabled: false,
        });
        break;

      default:
        this.setState({ dopaNSlider: value, isResetAllDisabled: false });
        break;
    }
  };

  onH2O2SliderChange = (value, skipReset) => {
    !skipReset && this.resetAll();

    switch (value[0]) {
      case 1:
        this.setState({
          h2O2Slider: value,
          dJ1: [-2],
          dJ1Status: "(When H2O2 increased by 100%)",
          dopamine: [-2],
          mPP: [1],

          calcium: "Increases",
          calciumClass: "inc",
          calciumSlider: [1],
          membranePotential: "Decreases",
          membranePotentialClass: "dec",
          memPotSlider: [-2],
          //   oxygen: "Decreases",
          //   oxygenClass: "dec",
          isResetAllDisabled: false,

          rOS: "Increases",
          rOSClass: "inc",
          rosSlider: [4],
          dopaN: "Decreases",
          dopaNClass: "dec",
          dopaNSlider: [-1],
          uchl1: [-1],
          parkin: [-1],
          alphaSyn: "Increases",
          alphaSynSlider: [1],
          alphaSynClass: "dec",
          apoptosisClass: "inc",
          apoptosis: "Increases",
          apopSlider: [1],
        });

        break;

      default:
        this.setState({ h2O2Slider: value, isResetAllDisabled: false });
        break;
    }
  };

  onOxygenSliderChange = (value, skipReset) => {
    !skipReset && this.resetAll();

    switch (value[0]) {
      case -1:
        this.setState({
          oxygenSlider: value,
          pink1: [-2],
          membranePotential: "Decreases",
          membranePotentialClass: "dec",
          rOS: "Increases",
          rOSClass: "inc",
          apoptosisClass: "inc",
          apoptosis: "Increases",
          calcium: "Increases",
          calciumClass: "inc",
          issionFusionClass: "alter",
          fissionFusion: "Altered",
          atp: "Decreases",
          atpClass: "dec",
          isResetAllDisabled: false,

          apopSlider: [1],
          atpSlider: [-2],
          calciumSlider: [1],
          rosSlider: [4],
          memPotSlider: [-2],
          fissionFusionSlider: [1],
        });
        break;

      default:
        this.setState({ oxygenSlider: value, isResetAllDisabled: false });
        break;
    }
  };

  onUPSliderChange = (value, skipReset) => {
    !skipReset && this.resetAll();

    switch (value[0]) {
      case 1:
        this.setState({
          uPSlider: value,
          parkin: [-1],
          uchl1: [-2],
          htrA2: [-1],
          membranePotential: "Decreases",
          membranePotentialClass: "dec",
          rOS: "Increases",
          rOSClass: "inc",
          apoptosisClass: "inc",
          apoptosis: "Increases",
          calcium: "Increases",
          calciumClass: "inc",
          fissionFusionClass: "alter",
          fissionFusion: "Altered",
          atp: "Decreases",
          atpClass: "dec",
          dopaN: "Decreases",
          dopaNClass: "dec",
          isResetAllDisabled: false,
          apopSlider: [1],
          dopaNSlider: [-1],
          calciumSlider: [1],
          rosSlider: [4],
          memPotSlider: [-2],
          fissionFusionSlider: [1],
          atpSlider: [-2],
        });
        break;

      default:
        this.setState({ uPSlider: value, isResetAllDisabled: false });
        break;
    }
  };

  onFissionFusionChange = (value, skipReset) => {
    !skipReset && this.resetAll();
    switch (value[0]) {
      case 1:
        this.setState({
          fissionFusionSlider: value,
          isResetAllDisabled: false,
          parkin: [-1],
          pink1: [-2],
          membranePotential: "Decreases",
          membranePotentialClass: "dec",
          memPotSlider: [-2],
          rOS: "Increases",
          rOSClass: "inc",
          rosSlider: [3],
          apoptosisClass: "inc",
          apoptosis: "Increases",
          apopSlider: [1],
          calcium: "Increases",
          calciumClass: "inc",
          calciumSlider: [1],
          oxygen: "Decreases",
          oxygenClass: "dec",
          oxygenSlider: [-1],
          atp: "Decreases",
          atpClass: "dec",
          atpSlider: [-2],
          dopaN: "Decreases",
          dopaNSlider: [-1],
          dopaNClass: "dec",
          upClass: "inc",
          up: "Increases",
          uPSlider: [1],
        });
        break;

      default:
        this.setState({
          fissionFusionSlider: value,
          isResetAllDisabled: false,
        });
        break;
    }
  };

  onPTPChange = (value, skipReset) => {
    !skipReset && this.resetAll();
    switch (value[0]) {
      case 1:
        this.setState({
          ptpSlider: value,
          isResetAllDisabled: false,
          membranePotential: "Decreases",
          membranePotentialClass: "dec",
          memPotSlider: [-2],
          rOS: "Increases",
          rOSClass: "inc",
          rosSlider: [3],
          apoptosisClass: "inc",
          apoptosis: "Increases",
          apopSlider: [1],
          calcium: "Increases",
          calciumClass: "inc",
          calciumSlider: [1],
          atp: "Decreases",
          atpClass: "dec",
        });
        break;

      default:
        this.setState({ ptpSlider: value });
        break;
    }
  };

  onC1Change = (value, skipReset) => {
    !skipReset && this.resetAll();

    switch (value[0]) {
      case -6:
        this.setState({
          c1Slider: value,
          isResetAllDisabled: false,
          dJ1: [-2],
          pink1: [-2],
          parkin: [-2],
          mPP: [1],
          mppStatus: "Inhibition for non-synaptic mitochondria",
        });
        break;

      case -5:
        this.setState({
          c1Slider: value,
          isResetAllDisabled: false,
          parkin: [-2],
          pink1: [-2],
        });
        break;

      case -4:
        this.setState({
          c1Slider: value,
          isResetAllDisabled: false,
          pink1: [-2],
        });
        break;

      case -3:
        this.setState({
          c1Slider: value,
          isResetAllDisabled: false,
          c1: "41% inhibition is found in frontal cortex of a PD patient",
        });
        break;

      case -2:
        this.setState({
          c1Slider: value,
          isResetAllDisabled: false,
          c1: "36% inhibition is found in Substantia Nigra of a PD patient",
        });
        break;

      case -1:
        this.setState({
          c1Slider: value,
          isResetAllDisabled: false,
          c1: "25% inhibition is found in Platelet of a PD patient",
          mPP: [1],
          mppStatus: "Inhibition for synaptic mitochondria",
        });
        break;

      default:
        this.setState({ c1Slider: value, isResetAllDisabled: false });
        break;
    }
  };

  computeParkinsonIndicator = () => {
    const {
      dJ1,
      mPP,
      htrA2,
      trap1,
      uchl1,
      pink1,
      parkin,
      dopamine,
    } = this.state;
    const computedValue =
      FACTOR_WEIGHTAGE_MAP[`dJ1${dJ1}`] +
      FACTOR_WEIGHTAGE_MAP[`mPP${mPP}`] +
      FACTOR_WEIGHTAGE_MAP[`htrA2${htrA2}`] +
      FACTOR_WEIGHTAGE_MAP[`trap1${trap1}`] +
      FACTOR_WEIGHTAGE_MAP[`uchl1${uchl1}`] +
      FACTOR_WEIGHTAGE_MAP[`pink1${pink1}`] +
      FACTOR_WEIGHTAGE_MAP[`parkin${parkin}`] +
      FACTOR_WEIGHTAGE_MAP[`dopamine${dopamine}`];

    this.setState({ parkinsonIndicator: computedValue });
  };

  resetAll = (...props) => {
    const isHalfReset11 = props && props[0]?.isHalfReset;
    const newState = isHalfReset11 ? HALF_RESET_STATE : INITIAL_STATE;
    console.log(isHalfReset11);

    this.setState({ ...newState });
  };

  render(props) {
    const {
      dJ1,
      mPP,
      htrA2,
      trap1,
      uchl1,
      pink1,
      parkin,
      dopamine,

      c1Slider,
      uPSlider,
      rosSlider,
      atpSlider,
      ptpSlider,
      h2O2Slider,
      apopSlider,
      dopaNSlider,
      memPotSlider,
      oxygenSlider,
      calciumSlider,
      alphaSynSlider,
      fissionFusionSlider,

      mppStatus,
      dJ1Status,
      parkinStatus,
      htrA2Status,
      dopamineStatus,

      parkinsonIndicator,

      c1,
      up,
      atp,
      ptp,
      rOS,
      h2O2,
      dopaN,
      oxygen,
      calcium,
      alphaSyn,
      apoptosis,
      mtIntegrity,
      fissionFusion,
      membranePotential,
      isResetAllDisabled,

      c1Class,
      upClass,
      ptpClass,
      atpClass,
      rOSClass,
      h2O2Class,
      dopaNClass,
      oxygenClass,
      calciumClass,
      alphaSynClass,
      apoptosisClass,
      mtIntegrityClass,
      fissionFusionClass,
      membranePotentialClass,
    } = this.state;

    return (
      <div className="app-container clear">
        <FirstColumn
          dJ1={dJ1}
          mPP={mPP}
          htrA2={htrA2}
          trap1={trap1}
          uchl1={uchl1}
          pink1={pink1}
          parkin={parkin}
          dopamine={dopamine}
          dJ1Status={dJ1Status}
          mppStatus={mppStatus}
          htrA2Status={htrA2Status}
          parkinStatus={parkinStatus}
          dopamineStatus={dopamineStatus}
          onDJ1Change={this.onDJ1Change}
          onDopChange={this.onDopChange}
          onMPPChange={this.onMPPChange}
          onPink1Change={this.onPink1Change}
          onTrap1Change={this.onTrap1Change}
          onHtrA2Change={this.onHtrA2Change}
          onUCHL1Change={this.onUCHL1Change}
          onParkinChange={this.onParkinChange}
        />
        <SecondCol
          up={up}
          atp={atp}
          ptp={ptp}
          rOS={rOS}
          h2O2={h2O2}
          dopaN={dopaN}
          oxygen={oxygen}
          calcium={calcium}
          alphaSyn={alphaSyn}
          uPSlider={uPSlider}
          rosSlider={rosSlider}
          apoptosis={apoptosis}
          atpSlider={atpSlider}
          apopSlider={apopSlider}
          mtIntegrity={mtIntegrity}
          ptpClass={ptpClass}
          dopaNSlider={dopaNSlider}
          ptpSlider={ptpSlider}
          memPotSlider={memPotSlider}
          calciumSlider={calciumSlider}
          fissionFusion={fissionFusion}
          fissionFusionSlider={fissionFusionSlider}
          alphaSynSlider={alphaSynSlider}
          h2O2Slider={h2O2Slider}
          oxygenSlider={oxygenSlider}
          membranePotential={membranePotential}
          onPTPChange={this.onPTPChange}
          onRosChange={this.onRosChange}
          onDopaNChange={this.onDopaNChange}
          onMemPotChange={this.onMemPotChange}
          onAlphaSChange={this.onAlphaSChange}
          onUPSliderChange={this.onUPSliderChange}
          onAtpSliderChange={this.onAtpSliderChange}
          onApopSliderChange={this.onApopSliderChange}
          onH2O2SliderChange={this.onH2O2SliderChange}
          onOxygenSliderChange={this.onOxygenSliderChange}
          onCalciumSliderChange={this.onCalciumSliderChange}
          onFissionFusionChange={this.onFissionFusionChange}
          upClass={upClass}
          atpClass={atpClass}
          rOSClass={rOSClass}
          h2O2Class={h2O2Class}
          dopaNClass={dopaNClass}
          oxygenClass={oxygenClass}
          calciumClass={calciumClass}
          alphaSynClass={alphaSynClass}
          apoptosisClass={apoptosisClass}
          mtIntegrityClass={mtIntegrityClass}
          fissionFusionClass={fissionFusionClass}
          membranePotentialClass={membranePotentialClass}
        />
        <div className="c1">
          <C1
            onReset={this.resetAll}
            name="Complex-1 Activity"
            className={c1Class}
            status={c1}
            value={c1Slider}
            isResetAllDisabled={isResetAllDisabled}
            onChange={this.onC1Change}
          />
        </div>
        <Predictor indicator={parkinsonIndicator} />
        <div className="svg-container">
          <svg viewBox="0 0 100 100" height="100%" id="svgDiagram">
            <g id="markers"></g>
            <g id="paths"></g>
          </svg>
        </div>
      </div>
    );
  }
}

export default App;
