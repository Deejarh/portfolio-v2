const colorMode = useColorMode();

 export  const useDark = computed(() => {
    colorMode.preference ===  "dark";
  });
