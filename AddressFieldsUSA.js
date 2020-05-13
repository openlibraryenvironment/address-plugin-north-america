import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from '@folio/stripes/components';
import { AddressTextField } from '@folio/address-utils';

import backendToFields from './backendToFields';

class AddressFieldsUSA extends React.Component {
  render() {
    const { name, requiredValidator, savedAddress, textFieldComponent } = this.props;
    const initialValues = backendToFields(savedAddress);
    return (
      <> 
        <Row>
          <Col xs={6} >
            <AddressTextField
              name={name ? `${name}.addressLineOne` : "addressLineOne"}
              label={<FormattedMessage id="ui-address-plugin-north-america.addressLineOne" />}
              component={textFieldComponent}
              required={true}
              validator={requiredValidator}
              initialValue={initialValues.addressLineOne}
            />
          </Col>
          <Col xs={6} >
            <AddressTextField
              name={name ? `${name}.addressLineTwo` : "addressLineTwo"}
              label={<FormattedMessage id="ui-address-plugin-north-america.addressLineTwo" />}
              component={textFieldComponent}
              initialValue={initialValues.addressLineTwo}
            />
          </Col>
          </Row>
        <Row>
          <Col xs={12}>
            <AddressTextField
              name={name ? `${name}.locality` : "locality"}
              label={<FormattedMessage id="ui-address-plugin-north-america.locality" />}
              component={textFieldComponent}
              required={true}
              validator={requiredValidator}
              initialValue={initialValues.locality}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={6} >
            <AddressTextField
              name={name ? `${name}.administrativeArea` : "administrativeArea"}
              label={<FormattedMessage id="ui-address-plugin-north-america.administrativeArea" />}
              component={textFieldComponent}
              required={true}
              validator={requiredValidator}
              initialValue={initialValues.administrativeArea}
            />
          </Col>
          <Col xs={6}>
            <AddressTextField
              name={name ? `${name}.postalCode` : "postalCode"}
              label={<FormattedMessage id="ui-address-plugin-north-america.postalCode" />}
              component={textFieldComponent}
              required={true}
              validator={requiredValidator}
              initialValue={initialValues.postalCode}
            />
          </Col>
        </Row>
      </>
    );
  }
}
export default AddressFieldsUSA;
