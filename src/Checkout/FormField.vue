<template>
    <div class="nes-field">
        <label :id="`${name}-label`" for="name">
            {{ label }}:
        </label>
        <!-- TODO: estudiar la normalización de datos en vue, y como funciona el v-model -->
        <input v-model.lazy="value" @input="(e: any) => (e.target.value = normalize(e.target.value))" :name="name"
            @blur="handleBlur" :type="type" :placeholder="placeholder"
            :class="`nes-input ${meta.touched && errorMessage && 'is-error'}`" />
    </div>
    <p v-if="meta.touched && errorMessage" class="note nes-text is-error">
        Error: {{ meta.touched && errorMessage }}
    </p>
</template>

<script setup  lang="ts">
import { useField } from 'vee-validate';


interface FormFieldProps {
    label: string
    name: string
    placeholder?: string
    type?: string
    normalize?: (value: string) => string;
}

const props = withDefaults(defineProps<FormFieldProps>(), {
    normalize: (value: string) => value
})

const { errorMessage, value, handleBlur, meta } = useField(props.name);

</script>

<style scoped>
</style>