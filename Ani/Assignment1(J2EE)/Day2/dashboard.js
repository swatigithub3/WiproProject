document.addEventListener('DOMContentLoaded', function () {
    const policyForm = document.getElementById('policyForm');
    const policyTable = document.getElementById('policyTable');

    policyForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const policyName = document.getElementById('policyName').value;
        const policyType = document.getElementById('policyType').value;
        const policyStatus = document.getElementById('policyStatus').value;

        const row = policyTable.insertRow();
        row.insertCell(0).textContent = policyTable.rows.length;
        row.insertCell(1).textContent = policyName;
        row.insertCell(2).textContent = policyType;
        row.insertCell(3).textContent = policyStatus;
        const actionCell = row.insertCell(4);
        const viewButton = document.createElement('button');
        viewButton.textContent = 'View';
        viewButton.className = 'btn btn-sm btn-info';
        viewButton.onclick = function () {
            viewPolicyDetails(policyTable.rows.length);
        };
        actionCell.appendChild(viewButton);

        $('#policyModal').modal('hide');
    });

    function viewPolicyDetails(policyId) {
        // For demonstration, let's assume details are hardcoded
        const policyDetails = {
            1: { name: 'Health Insurance', type: 'Health', status: 'Active', details: 'Comprehensive health insurance plan.' },
            2: { name: 'Car Insurance', type: 'Vehicle', status: 'Pending', details: 'Complete car insurance with roadside assistance.' },
            3: { name: 'Home Insurance', type: 'Property', status: 'Inactive', details: 'Insurance coverage for home and property.' }
        };

        const policy = policyDetails[policyId];
        if (policy) {
            const detailsDiv = document.getElementById('policyDetails');
            detailsDiv.innerHTML = `
                <p><strong>Policy Name:</strong> ${policy.name}</p>
                <p><strong>Type:</strong> ${policy.type}</p>
                <p><strong>Status:</strong> ${policy.status}</p>
                <p><strong>Details:</strong> ${policy.details}</p>
            `;

            $('#policyDetailsModal').modal('show');
        }
    }

    const headers = document.querySelectorAll('th');
    headers.forEach(header => {
        header.addEventListener('click', function () {
            const table = header.parentElement.parentElement.parentElement;
            const rows = Array.from(table.querySelectorAll('tbody > tr'));
            const index = Array.from(header.parentElement.children).indexOf(header);
            const ascending = header.classList.toggle('asc');
            header.classList.toggle('desc', !ascending);

            rows.sort((rowA, rowB) => {
                const cellA = rowA.cells[index].textContent;
                const cellB = rowB.cells[index].textContent;
                return cellA.localeCompare(cellB, undefined, { numeric: true }) * (ascending ? 1 : -1);
            });

            rows.forEach(row => table.querySelector('tbody').appendChild(row));
        });
    });
});