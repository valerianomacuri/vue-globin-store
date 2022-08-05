<template>
    <form :validation-schema="schema" @submit="onSubmit">
        <FormField name="name" label="Cardholders Name" type="text" placeholder="John Smith" />
        <FormField name="cardNumber" label="Card Number" type="tel" placeholder="0000 0000 0000 0000" :normalize="value => value
        .replace(/\s/g, '')
        .match(/.{1,4}/g)
        ?.join(' ').substr(0, 19) || ''" />
        <FormField name="expDate" label="Expiration Date" type="month" />
        <FormField name="cvv" label="CVV" type="number" placeholder="000" :normalize="value => value.substr(0, 3)" />
        <button class="nes-btn is-primary">Place order</button>
    </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as yup from "yup"
import FormField from './FormField.vue';

interface CheckoutFormProps {
    submit?: () => Promise<void>
}

const props = withDefaults(defineProps<CheckoutFormProps>(), {
    submit: async () => { }
})

const schema = yup.object().shape({
    name: yup.string().required(),
    cardNumber: yup
        .string()
        .required()
        .matches(
            /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
            "Card should have xxxx xxxx xxxx xxxx format"
        ),
    expDate: yup.date().nullable().default(null).required(),
    cvv: yup
        .string()
        .required()
        .matches(/^\d\d\d$/, "CVV should contain three numbers"),
})

const { handleSubmit } = useForm({
    validationSchema: schema,
    initialValues: {
        name: "",
        cardNumber: "",
        expDate: "",
        cvv: ""
    }
});

const onSubmit = handleSubmit(values => {
    console.log({ values })
    props.submit()
});

</script>

<style scoped>
</style>