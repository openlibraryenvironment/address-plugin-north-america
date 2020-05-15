import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Row, Col } from '@folio/stripes/components';
import { AddressTextField, toKebabCase } from '@folio/address-utils';

import backendToFields from './backendToFields';

class AddressFieldsUSA extends React.Component {
  render() {
    const { country, intl, name, requiredValidator, savedAddress, textFieldComponent } = this.props;
    const countryString = toKebabCase(country);
    const initialValues = backendToFields(savedAddress);
    console.log("InitialValues: %o", initialValues)
    return (
      <> 
        <Row>
          <Col xs={6} >
            <AddressTextField
              name={name ? `${name}.addressLineOne` : "addressLineOne"}
              label={<FormattedMessage id={`ui-address-plugin-north-america.${countryString}.addressLineOne`} />}
              component={textFieldComponent}
              required={true}
              validator={requiredValidator}
              initialValue={initialValues.addressLineOne}
            />
          </Col>
          <Col xs={6} >
            <AddressTextField
              name={name ? `${name}.addressLineTwo` : "addressLineTwo"}
              label={<FormattedMessage id={`ui-address-plugin-north-america.${countryString}.addressLineTwo`} />}
              component={textFieldComponent}
              initialValue={initialValues.addressLineTwo}
            />
          </Col>
          </Row>
        <Row>
          <Col xs={12}>
            <AddressTextField
              name={name ? `${name}.locality` : "locality"}
              label={<FormattedMessage id={`ui-address-plugin-north-america.${countryString}.locality`} />}
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
              label={<FormattedMessage id={`ui-address-plugin-north-america.${countryString}.administrativeArea`} />}
              component={textFieldComponent}
              required={true}
              validator={requiredValidator}
              initialValue={initialValues.administrativeArea}
            />
          </Col>
          <Col xs={6}>
            <AddressTextField
              name={name ? `${name}.postalCode` : "postalCode"}
              label={<FormattedMessage id={`ui-address-plugin-north-america.${countryString}.postalCode`} />}
              component={textFieldComponent}
              required={true}
              validator={requiredValidator}
              initialValue={initialValues.postalCode}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} >
          <AddressTextField
            name={name ? `${name}.country` : "country"}
            label={<FormattedMessage id={`ui-address-plugin-north-america.${countryString}.country`} />}
            component={textFieldComponent}
            required={true}
            validator={requiredValidator}
            initialValue={initialValues.country}
            defaultValue={intl.formatMessage({ id: `ui-address-plugin-north-america.countryCode.${initialValues.countryCode}` })}
            />
          </Col>
        </Row>
      </>
    );
  }
}
export default injectIntl(AddressFieldsUSA);
