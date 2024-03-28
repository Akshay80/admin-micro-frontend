/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getCart } from "../graphql/queries";
import { updateCart } from "../graphql/mutations";
export default function CartUpdateForm(props) {
  const {
    id: idProp,
    cart: cartModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    items: "",
    subTotal: "",
    taxTotal: "",
    deliveryTotal: "",
    total: "",
    pickupAddress: "",
    billingAddress: "",
    deliveryAddress: "",
    lock: false,
  };
  const [items, setItems] = React.useState(initialValues.items);
  const [subTotal, setSubTotal] = React.useState(initialValues.subTotal);
  const [taxTotal, setTaxTotal] = React.useState(initialValues.taxTotal);
  const [deliveryTotal, setDeliveryTotal] = React.useState(
    initialValues.deliveryTotal
  );
  const [total, setTotal] = React.useState(initialValues.total);
  const [pickupAddress, setPickupAddress] = React.useState(
    initialValues.pickupAddress
  );
  const [billingAddress, setBillingAddress] = React.useState(
    initialValues.billingAddress
  );
  const [deliveryAddress, setDeliveryAddress] = React.useState(
    initialValues.deliveryAddress
  );
  const [lock, setLock] = React.useState(initialValues.lock);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = cartRecord
      ? { ...initialValues, ...cartRecord }
      : initialValues;
    setItems(
      typeof cleanValues.items === "string" || cleanValues.items === null
        ? cleanValues.items
        : JSON.stringify(cleanValues.items)
    );
    setSubTotal(cleanValues.subTotal);
    setTaxTotal(cleanValues.taxTotal);
    setDeliveryTotal(cleanValues.deliveryTotal);
    setTotal(cleanValues.total);
    setPickupAddress(
      typeof cleanValues.pickupAddress === "string" ||
        cleanValues.pickupAddress === null
        ? cleanValues.pickupAddress
        : JSON.stringify(cleanValues.pickupAddress)
    );
    setBillingAddress(
      typeof cleanValues.billingAddress === "string" ||
        cleanValues.billingAddress === null
        ? cleanValues.billingAddress
        : JSON.stringify(cleanValues.billingAddress)
    );
    setDeliveryAddress(
      typeof cleanValues.deliveryAddress === "string" ||
        cleanValues.deliveryAddress === null
        ? cleanValues.deliveryAddress
        : JSON.stringify(cleanValues.deliveryAddress)
    );
    setLock(cleanValues.lock);
    setErrors({});
  };
  const [cartRecord, setCartRecord] = React.useState(cartModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getCart.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCart
        : cartModelProp;
      setCartRecord(record);
    };
    queryData();
  }, [idProp, cartModelProp]);
  React.useEffect(resetStateValues, [cartRecord]);
  const validations = {
    items: [{ type: "JSON" }],
    subTotal: [],
    taxTotal: [],
    deliveryTotal: [],
    total: [],
    pickupAddress: [{ type: "JSON" }],
    billingAddress: [{ type: "JSON" }],
    deliveryAddress: [{ type: "JSON" }],
    lock: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          items: items ?? null,
          subTotal: subTotal ?? null,
          taxTotal: taxTotal ?? null,
          deliveryTotal: deliveryTotal ?? null,
          total: total ?? null,
          pickupAddress: pickupAddress ?? null,
          billingAddress: billingAddress ?? null,
          deliveryAddress: deliveryAddress ?? null,
          lock: lock ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateCart.replaceAll("__typename", ""),
            variables: {
              input: {
                id: cartRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CartUpdateForm")}
      {...rest}
    >
      <TextAreaField
        label="Items"
        isRequired={false}
        isReadOnly={false}
        value={items}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              items: value,
              subTotal,
              taxTotal,
              deliveryTotal,
              total,
              pickupAddress,
              billingAddress,
              deliveryAddress,
              lock,
            };
            const result = onChange(modelFields);
            value = result?.items ?? value;
          }
          if (errors.items?.hasError) {
            runValidationTasks("items", value);
          }
          setItems(value);
        }}
        onBlur={() => runValidationTasks("items", items)}
        errorMessage={errors.items?.errorMessage}
        hasError={errors.items?.hasError}
        {...getOverrideProps(overrides, "items")}
      ></TextAreaField>
      <TextField
        label="Sub total"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={subTotal}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              items,
              subTotal: value,
              taxTotal,
              deliveryTotal,
              total,
              pickupAddress,
              billingAddress,
              deliveryAddress,
              lock,
            };
            const result = onChange(modelFields);
            value = result?.subTotal ?? value;
          }
          if (errors.subTotal?.hasError) {
            runValidationTasks("subTotal", value);
          }
          setSubTotal(value);
        }}
        onBlur={() => runValidationTasks("subTotal", subTotal)}
        errorMessage={errors.subTotal?.errorMessage}
        hasError={errors.subTotal?.hasError}
        {...getOverrideProps(overrides, "subTotal")}
      ></TextField>
      <TextField
        label="Tax total"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={taxTotal}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              items,
              subTotal,
              taxTotal: value,
              deliveryTotal,
              total,
              pickupAddress,
              billingAddress,
              deliveryAddress,
              lock,
            };
            const result = onChange(modelFields);
            value = result?.taxTotal ?? value;
          }
          if (errors.taxTotal?.hasError) {
            runValidationTasks("taxTotal", value);
          }
          setTaxTotal(value);
        }}
        onBlur={() => runValidationTasks("taxTotal", taxTotal)}
        errorMessage={errors.taxTotal?.errorMessage}
        hasError={errors.taxTotal?.hasError}
        {...getOverrideProps(overrides, "taxTotal")}
      ></TextField>
      <TextField
        label="Delivery total"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={deliveryTotal}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              items,
              subTotal,
              taxTotal,
              deliveryTotal: value,
              total,
              pickupAddress,
              billingAddress,
              deliveryAddress,
              lock,
            };
            const result = onChange(modelFields);
            value = result?.deliveryTotal ?? value;
          }
          if (errors.deliveryTotal?.hasError) {
            runValidationTasks("deliveryTotal", value);
          }
          setDeliveryTotal(value);
        }}
        onBlur={() => runValidationTasks("deliveryTotal", deliveryTotal)}
        errorMessage={errors.deliveryTotal?.errorMessage}
        hasError={errors.deliveryTotal?.hasError}
        {...getOverrideProps(overrides, "deliveryTotal")}
      ></TextField>
      <TextField
        label="Total"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={total}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              items,
              subTotal,
              taxTotal,
              deliveryTotal,
              total: value,
              pickupAddress,
              billingAddress,
              deliveryAddress,
              lock,
            };
            const result = onChange(modelFields);
            value = result?.total ?? value;
          }
          if (errors.total?.hasError) {
            runValidationTasks("total", value);
          }
          setTotal(value);
        }}
        onBlur={() => runValidationTasks("total", total)}
        errorMessage={errors.total?.errorMessage}
        hasError={errors.total?.hasError}
        {...getOverrideProps(overrides, "total")}
      ></TextField>
      <TextAreaField
        label="Pickup address"
        isRequired={false}
        isReadOnly={false}
        value={pickupAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              items,
              subTotal,
              taxTotal,
              deliveryTotal,
              total,
              pickupAddress: value,
              billingAddress,
              deliveryAddress,
              lock,
            };
            const result = onChange(modelFields);
            value = result?.pickupAddress ?? value;
          }
          if (errors.pickupAddress?.hasError) {
            runValidationTasks("pickupAddress", value);
          }
          setPickupAddress(value);
        }}
        onBlur={() => runValidationTasks("pickupAddress", pickupAddress)}
        errorMessage={errors.pickupAddress?.errorMessage}
        hasError={errors.pickupAddress?.hasError}
        {...getOverrideProps(overrides, "pickupAddress")}
      ></TextAreaField>
      <TextAreaField
        label="Billing address"
        isRequired={false}
        isReadOnly={false}
        value={billingAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              items,
              subTotal,
              taxTotal,
              deliveryTotal,
              total,
              pickupAddress,
              billingAddress: value,
              deliveryAddress,
              lock,
            };
            const result = onChange(modelFields);
            value = result?.billingAddress ?? value;
          }
          if (errors.billingAddress?.hasError) {
            runValidationTasks("billingAddress", value);
          }
          setBillingAddress(value);
        }}
        onBlur={() => runValidationTasks("billingAddress", billingAddress)}
        errorMessage={errors.billingAddress?.errorMessage}
        hasError={errors.billingAddress?.hasError}
        {...getOverrideProps(overrides, "billingAddress")}
      ></TextAreaField>
      <TextAreaField
        label="Delivery address"
        isRequired={false}
        isReadOnly={false}
        value={deliveryAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              items,
              subTotal,
              taxTotal,
              deliveryTotal,
              total,
              pickupAddress,
              billingAddress,
              deliveryAddress: value,
              lock,
            };
            const result = onChange(modelFields);
            value = result?.deliveryAddress ?? value;
          }
          if (errors.deliveryAddress?.hasError) {
            runValidationTasks("deliveryAddress", value);
          }
          setDeliveryAddress(value);
        }}
        onBlur={() => runValidationTasks("deliveryAddress", deliveryAddress)}
        errorMessage={errors.deliveryAddress?.errorMessage}
        hasError={errors.deliveryAddress?.hasError}
        {...getOverrideProps(overrides, "deliveryAddress")}
      ></TextAreaField>
      <SwitchField
        label="Lock"
        defaultChecked={false}
        isDisabled={false}
        isChecked={lock}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              items,
              subTotal,
              taxTotal,
              deliveryTotal,
              total,
              pickupAddress,
              billingAddress,
              deliveryAddress,
              lock: value,
            };
            const result = onChange(modelFields);
            value = result?.lock ?? value;
          }
          if (errors.lock?.hasError) {
            runValidationTasks("lock", value);
          }
          setLock(value);
        }}
        onBlur={() => runValidationTasks("lock", lock)}
        errorMessage={errors.lock?.errorMessage}
        hasError={errors.lock?.hasError}
        {...getOverrideProps(overrides, "lock")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || cartModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || cartModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
