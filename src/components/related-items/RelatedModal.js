import {useEffect} from 'react';

export default function RelatedModal (props) {
  let comparison = {};
  let x_mark = 'x';
  useEffect(() => {}, [])
  props.currentData.features.forEach((feature) => {
    comparison[feature.feature] = [feature.value, x_mark];
  });
  props.relatedProduct.features.forEach((relatedFeature) => {
    if (!comparison.hasOwnProperty(relatedFeature.feature)) {
      comparison[relatedFeature.feature] = [x_mark, relatedFeature.value]
    } else {
      comparison[relatedFeature.feature][1] = relatedFeature.value;
    }
  })
  if (!props.showModal) {
    return null;
  }
  return (
    <div className='related-modal' onClick={props.onClose} data-testid='related-modal'>
      <div className='related-model-overlay'></div>
      <div className='related-modal-content'>
        <div className='related-modal-title'>
          COMPARING
        </div>
        <div className='modal-columns'>
          <div className='modal-column current'>
            <h3>{props.currentData.name}</h3>
            {Object.keys(comparison).map((key) => {
                return (
                <p>{comparison[key][0]}</p>
              )
            })}
          </div>
          <div className='modal-column features'>
            <h3>{'FEATURES'}</h3>
            {Object.keys(comparison).map((key) => {
              return (
                <p>{key}</p>
              )
              })
            }
          </div>
          <div className='modal-column related'>
            <h3>{props.relatedProduct.name}</h3>
            {Object.keys(comparison).map((key) => {
              return (
                <p>{comparison[key][1]}</p>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
