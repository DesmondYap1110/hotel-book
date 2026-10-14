
import { reactive } from 'vue';

export function useErrors() {
  const errors = reactive({});

  function get(field) {
    if (errors[field]) {
      return errors[field][0];
    }
  }

function record(newErrors) {
    Object.assign(errors, newErrors);
  }

  function clear(field) {
    delete errors[field];
  }

  function any() {
    return Object.keys(errors).length > 0;
  }

  return {
    errors,
    get,
    record,
    clear,
    any
  };
}

