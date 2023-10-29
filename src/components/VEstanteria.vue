<template>
  <div class="componente-cristal estanteria" >
    <VLibro
      v-for="libro in libros"
      :key="libro.getId()"
      :codigo="libro.getId()"
      :titulo="libro.getTitulo()"
      :autor="libro.getAutor()"
      :thumbnail="libro.getThumbnail()"
      v-on:enviar_id="(id) => enviar_libro_para_carta(id)"
    />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { solicitarLibros, buscarLibroporID } from '../code/controller';
import { useEventEmitter } from '../code/useEventEmitter';
import VLibro from './VLibro.vue';

const data = ref([]);

const libros = computed(() => data.value)

const emit = defineEmits(['enviar_libro', 'eliminar_libro'])

const enviar_libro_para_carta = async (id)=>{
    const libro = await buscarLibroporID(id);
    emit('enviar_libro', libro);
}

onMounted(async ()=>{
    data.value = await solicitarLibros()
    useEventEmitter().listen('actualizar', async (event)=>{ 
        let { titulo , autor, anno, publicador } = event.detail || [null, null, null, null];
        data.value = await solicitarLibros(titulo, autor, anno, publicador);
    })
})

</script>

<style scoped>
.estanteria {
  padding: 20px;
  display: flex;
  min-width: 200px;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 5%;
  overflow: auto;
  box-shadow: 0px 0px 8px white;
}
@media only screen and (max-width: 700px) {
  .estanteria{
    min-width: 130px;
  }
}
</style>
