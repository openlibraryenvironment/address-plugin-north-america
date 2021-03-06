import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Row, Col } from 'react-flexbox-grid';
import { AddressTextField } from '@folio/address-utils';

import backendToFields from './backendToFields';

class AddressFieldsUSA extends React.Component {
  static propTypes = {
    country: PropTypes.string,
    intl: PropTypes.object.isRequired,
    name: PropTypes.string,
    requiredValidator: PropTypes.func,
    savedAddress: PropTypes.shape({
      addressLabel: PropTypes.string,
      countryCode: PropTypes.string,
      id: PropTypes.string,
      lines: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.shape({
          value: PropTypes.string.isRequired
        }).isRequired,
        value: PropTypes.string.isRequired
      })),
    }),
    textFieldComponent: PropTypes.object
  };

  render() {
    const { country, intl, name, requiredValidator, savedAddress, textFieldComponent } = this.props;
    const initialValues = backendToFields(savedAddress);
    return (
      <>
        <Row>
          <Col xs={6}>
            <AddressTextField
              name={name ? `${name}.addressLineOne` : 'addressLineOne'}
              label={<FormattedMessage id={`ui-address-plugin-north-america.${country}.addressLineOne`} />}
              component={textFieldComponent}
              required
              validator={requiredValidator}
              initialValue={initialValues.addressLineOne}
            />
          </Col>
          <Col xs={6}>
            <AddressTextField
              name={name ? `${name}.addressLineTwo` : 'addressLineTwo'}
              label={<FormattedMessage id={`ui-address-plugin-north-america.${country}.addressLineTwo`} />}
              component={textFieldComponent}
              initialValue={initialValues.addressLineTwo}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <AddressTextField
              name={name ? `${name}.locality` : 'locality'}
              label={<FormattedMessage id={`ui-address-plugin-north-america.${country}.locality`} />}
              component={textFieldComponent}
              required
              validator={requiredValidator}
              initialValue={initialValues.locality}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <AddressTextField
              name={name ? `${name}.administrativeArea` : 'administrativeArea'}
              label={<FormattedMessage id={`ui-address-plugin-north-america.${country}.administrativeArea`} />}
              component={textFieldComponent}
              required
              validator={requiredValidator}
              initialValue={initialValues.administrativeArea}
            />
          </Col>
          <Col xs={6}>
            <AddressTextField
              name={name ? `${name}.postalCode` : 'postalCode'}
              label={<FormattedMessage id={`ui-address-plugin-north-america.${country}.postalCode`} />}
              component={textFieldComponent}
              required
              validator={requiredValidator}
              initialValue={initialValues.postalCode}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <AddressTextField
              name={name ? `${name}.country` : 'country'}
              label={<FormattedMessage id={`ui-address-plugin-north-america.${country}.country`} />}
              component={textFieldComponent}
              required
              validator={requiredValidator}
              initialValue={initialValues.country}
              defaultValue={intl.formatMessage({ id: `ui-address-plugin-north-america.${initialValues.countryCode}.countryCode` })}
            />
          </Col>
        </Row>
      </>
    );
  }
}
export default injectIntl(AddressFieldsUSA);
