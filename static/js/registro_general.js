document.addEventListener('DOMContentLoaded', function () {
    var rol = document.getElementById('rol');
    var alumnoCampos = document.getElementById('alumno-campos');
    var docenteCampos = document.getElementById('docente-campos');
    var directivosCampos = document.getElementById('directivos-campos');
    var grupo = document.getElementById('grupo');
    var semestre = document.getElementById('semestre');
    var materia = document.getElementById('materia');
    var numero_telefono = document.getElementById('numero_telefono');
    var departamento = document.getElementById('departamento');
    var cargo = document.getElementById('cargo');
    var fecha_ingreso = document.getElementById('fecha_ingreso');

    function updateFields() {
        var val = rol ? rol.value : '';
        if (val === 'alumno') {
            if (alumnoCampos) alumnoCampos.style.display = 'block';
            if (docenteCampos) docenteCampos.style.display = 'none';
            if (directivosCampos) directivosCampos.style.display = 'none';
            if (grupo) grupo.required = true;
            if (semestre) semestre.required = true;
            if (materia) materia.required = false;
            if (numero_telefono) numero_telefono.required = false;
            if (departamento) departamento.required = false;
            if (cargo) cargo.required = false;
            if (fecha_ingreso) fecha_ingreso.required = false;
        } else if (val === 'docente') {
            if (alumnoCampos) alumnoCampos.style.display = 'none';
            if (docenteCampos) docenteCampos.style.display = 'block';
            if (directivosCampos) directivosCampos.style.display = 'none';
            if (grupo) grupo.required = false;
            if (semestre) semestre.required = false;
            if (materia) materia.required = true;
            if (numero_telefono) numero_telefono.required = false;
            if (departamento) departamento.required = false;
            if (cargo) cargo.required = false;
            if (fecha_ingreso) fecha_ingreso.required = false;
        } else if (val === 'directivo') {
            if (alumnoCampos) alumnoCampos.style.display = 'none';
            if (docenteCampos) docenteCampos.style.display = 'none';
            if (directivosCampos) directivosCampos.style.display = 'block';
            if (grupo) grupo.required = false;
            if (semestre) semestre.required = false;
            if (materia) materia.required = false;
            if (numero_telefono) numero_telefono.required = true;
            if (departamento) departamento.required = true;
            if (cargo) cargo.required = true;
            if (fecha_ingreso) fecha_ingreso.required = true;
        } else {
            if (alumnoCampos) alumnoCampos.style.display = 'none';
            if (docenteCampos) docenteCampos.style.display = 'none';
            if (directivosCampos) directivosCampos.style.display = 'none';
            if (grupo) grupo.required = false;
            if (semestre) semestre.required = false;
            if (materia) materia.required = false;
            if (numero_telefono) numero_telefono.required = false;
            if (departamento) departamento.required = false;
            if (cargo) cargo.required = false;
            if (fecha_ingreso) fecha_ingreso.required = false;
        }
    }

    if (rol) {
        rol.addEventListener('change', updateFields);
        // call once to set initial visibility (useful if form re-renders with a selected value)
        updateFields();
    }
});
