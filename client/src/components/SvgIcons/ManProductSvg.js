import React from 'react';

import { SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const addStyles = props => {
    const useStyle = makeStyles(theme => ({
        imagetype : {
            width      : props.fullWidth ? '100%' : props.width || '300px',
            height     : props.fullHeight ? '100%' : props.height || '300px'
        }
    }))
    return useStyle;
}

const ManProductSvg = props => {
  const classes = addStyles(props)()

  return(
      <SvgIcon
          className={classes.imagetype}
          viewBox="0 0 558 558"
          margin={props.margin || 'dense'}
          width="558"
          height="558"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g id="productDraw">
          <g id="manProduct">
          <g id="cardBack">
          <path id="Vector" d="M105.433 517.363L228.333 276.963C229.333 274.963 231.733 274.263 233.733 275.263L293.333 305.763C295.333 306.763 296.033 309.163 295.033 311.163L172.133 551.563C171.133 553.563 168.733 554.263 166.733 553.263L107.133 522.763C105.233 521.763 104.433 519.363 105.433 517.363Z" fill="#BDBDBD"/>
          <path id="Vector_2" d="M339.633 267.863L405.733 257.363C407.933 257.063 409.933 258.463 410.333 260.663L452.733 527.363C453.033 529.563 451.633 531.563 449.433 531.963L383.333 542.463C381.133 542.763 379.133 541.363 378.733 539.163L336.433 272.463C335.933 270.263 337.433 268.263 339.633 267.863Z" fill="#BDBDBD"/>
          </g>
          <g id="cardLines">
          <path id="Vector_3" d="M136.133 508.963L211.233 362.063C212.133 360.363 214.233 359.663 215.933 360.563C217.633 361.463 218.333 363.563 217.433 365.263L142.333 512.163C141.433 513.863 139.333 514.563 137.633 513.663C135.933 512.763 135.233 510.663 136.133 508.963Z" fill="white"/>
          <path id="Vector_4" d="M229.933 371.563C230.833 369.863 232.933 369.163 234.633 370.063C236.333 370.963 237.033 373.063 236.133 374.763L161.033 521.663C160.133 523.363 158.033 524.063 156.333 523.163C154.633 522.263 153.933 520.163 154.833 518.463L229.933 371.563Z" fill="white"/>
          <path id="Vector_5" d="M375.533 347.263C377.433 346.963 379.233 348.263 379.533 350.163L405.433 513.163C405.733 515.063 404.433 516.863 402.533 517.163C400.633 517.463 398.833 516.163 398.533 514.263L372.633 351.263C372.333 349.363 373.633 347.563 375.533 347.263Z" fill="white"/>
          <path id="Vector_6" d="M396.233 343.963C398.133 343.663 399.933 344.963 400.233 346.863L426.133 509.863C426.433 511.763 425.133 513.563 423.233 513.863C421.333 514.163 419.533 512.863 419.233 510.963L393.333 347.963C393.033 346.063 394.333 344.263 396.233 343.963Z" fill="white"/>
          </g>
          <g id="colorPrimary">
          <path id="Vector_7" d="M245.733 346.163C234.135 346.163 224.733 336.761 224.733 325.163C224.733 313.565 234.135 304.163 245.733 304.163C257.331 304.163 266.733 313.565 266.733 325.163C266.733 336.761 257.331 346.163 245.733 346.163Z" fill="#19ABAB"/>
          <path id="Vector_8" d="M399.833 301.163C399.833 312.763 390.433 322.163 378.833 322.163C378.533 322.163 378.233 322.163 377.933 322.163L387.033 281.863C394.533 285.063 399.833 292.463 399.833 301.163Z" fill="#19ABAB"/>
          <path id="Vector_9" d="M296.033 72.763L294.833 71.763V71.463L296.033 72.763Z" fill="#19ABAB"/>
          <path id="Vector_10" d="M312.633 74.6629L325.033 50.8629L330.433 53.0629L308.533 162.463L304.133 81.1629L312.133 89.6629L312.633 74.6629Z" fill="#19ABAB"/>
          </g>
          <path id="colorSecondary" d="M297.133 516.863L298.933 505.163H299.633L322.733 389.763C322.733 389.763 320.733 375.763 321.233 363.263L306.233 270.163C301.033 270.663 295.033 272.163 295.033 268.163V227.863L292.733 264.963L271.833 255.863L276.433 163.863C276.433 163.863 270.933 110.163 270.933 107.463C270.933 104.763 272.733 91.963 272.733 91.963L273.333 92.1629L273.133 91.563L294.733 71.6629L304.033 78.763L308.633 162.563L330.533 53.063C330.533 53.063 380.533 63.263 385.133 70.563C385.533 71.263 386.033 73.163 386.433 76.063L421.833 177.563L395.733 222.463C395.833 224.263 395.833 225.363 395.833 225.363C395.833 225.363 404.933 254.463 395.833 254.463C395.133 254.463 394.233 254.263 393.233 253.963L366.233 373.263L357.833 408.763L377.533 532.063C368.933 532.963 353.033 533.063 338.633 532.263C338.533 535.863 338.133 539.163 337.633 540.663C336.233 544.263 272.033 543.063 264.133 536.663C256.333 530.163 297.133 516.863 297.133 516.863ZM343.133 506.063L340.833 506.163L338.833 489.963L333.933 510.563C339.033 508.563 342.933 507.263 342.933 507.263L343.133 506.063Z" fill="#2A2B3E"/>
          <path id="shadow" opacity="0.2" d="M359.033 415.863L340.833 499.063L338.633 488.863L358.533 412.363L359.033 415.863Z" fill="black"/>
          <g id="colorLight">
          <path id="Vector_11" d="M278.733 298.263L266.333 291.963C267.833 281.463 272.533 268.563 272.533 268.563L275.333 257.463L289.133 263.463L288.033 270.463C288.033 270.363 285.033 288.163 278.733 298.263Z" fill="white"/>
          <path id="Vector_12" d="M363.133 239.163L376.633 249.363C375.233 256.563 369.733 280.363 359.733 281.863C347.933 283.663 361.533 245.463 361.533 245.463L363.133 239.163Z" fill="white"/>
          <path id="Vector_13" d="M312.633 74.663L312.133 89.663L304.033 81.163L304.133 83.463L303.833 78.663L294.533 71.563L294.433 71.663L290.533 68.763C288.333 69.363 286.133 69.563 283.733 69.563C268.633 69.563 256.433 57.363 256.433 42.263C256.433 27.163 268.633 14.963 283.733 14.963C298.833 14.963 311.033 27.163 311.033 42.263C311.033 42.663 311.033 43.063 311.033 43.463L324.833 50.763L312.633 74.663Z" fill="white"/>
          </g>
          <path id="hair" d="M311.233 45.063C311.233 45.063 322.133 14.063 297.533 6.86298C272.933 -0.337021 262.033 7.76298 258.433 12.363C254.633 17.163 236.633 40.563 247.533 46.063C258.433 51.563 263.433 44.663 263.433 41.963C263.433 39.263 279.833 41.963 287.133 44.663C291.133 46.363 295.833 45.463 298.933 42.363C298.933 42.363 300.733 33.763 306.233 38.263C311.733 42.763 311.233 45.063 311.233 45.063Z" fill="#2A2B3E"/>
          </g>
          </g>
      </SvgIcon>
  );
};

export default ManProductSvg;